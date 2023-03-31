import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PostHttp, PostHttpSend} from '../PostHttp';




@Injectable({ providedIn: 'root' })
export class HttpDataService {


  private PostHttpsUrl = 'http://localhost:3001/api/blogs';  // URL to web api


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,) { }


  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.PostHttpsUrl)
      .pipe(
        tap(_ => this.log('Obtidos os posts em BD')),
        catchError(this.handleError<any[]>('getPosts', []))
      );
  }

  getPostHttpNo404<Data>(id: number): Observable<PostHttp> {
    const url = `${this.PostHttpsUrl}/?id=${id}`;
    return this.http.get<PostHttp[]>(url)
      .pipe(
        map(PostHttps => PostHttps[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} PostHttp id=${id}`);
        }),
        catchError(this.handleError<PostHttp>(`getPostHttp id=${id}`))
      );
  }


  getPostHttp(id: String): Observable<PostHttp> {
    const url = `${this.PostHttpsUrl}/${id}`;
    return this.http.get<PostHttp>(url).pipe(
      tap(_ => this.log(`fetched PostHttp id=${id}`)),
      catchError(this.handleError<PostHttp>(`getPostHttp id=${id}`))
    );
  }


  addPostHttp(PostHttpSend: PostHttpSend): Observable<PostHttpSend> {
    return this.http.post<PostHttpSend>(this.PostHttpsUrl, PostHttpSend, this.httpOptions).pipe(
      tap((newPostHttp: PostHttpSend) => this.log(`added PostHttp w/ id=${newPostHttp.id}`)),
      catchError(this.handleError<PostHttp>('addPostHttp'))
    );
  }

  deletePostHttp(id: string): Observable<PostHttp> {
    const url = `${this.PostHttpsUrl}/${id}`;

    return this.http.delete<PostHttp>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted PostHttp id=${id}`)),
      catchError(this.handleError<PostHttp>('deletePostHttp'))
    );
  }

  updatePostHttp(PostHttp: PostHttp): Observable<any> {
    return this.http.put(this.PostHttpsUrl + "/" + PostHttp._id, PostHttp, this.httpOptions).pipe(
      tap(_ => this.log(`updated PostHttp id=${PostHttp.id}`)),
      catchError(this.handleError<any>('updatePostHttp'))
    );
  }

  /**
   * Método para lidar com erros
   *
   * @param operation - nome da operação falhada
   * @param result - opcionar (devolve um observável)
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  private log(message: string) {
    console.log(message);
  }
}

