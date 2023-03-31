
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


interface PostHttp {
  titulo: string,
  dataPublicacao: string,
  tempoDeLeitura: string,
  comentarios: string,
  pequenaDescricao: string,
  imagem: string,
  id: number,
  seoTitulo: string
}
@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent implements OnInit {

    posts = new Array<any>();

    constructor(private http:HttpClient) {
    }

    public getUPosts(): Observable<any> {
      const url = 'http://localhost:3001/api/blogs';
      return this.http.get<PostHttp>(url);
  }
    ngOnInit() {
      this.getUPosts().subscribe(response => {
        this.posts = response.data;
    });
    console.log(this.posts);
    }
}

