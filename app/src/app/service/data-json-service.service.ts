import data from '../../assets/json/data.json';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataJsonServiceService {


  postTeasers: any = (data as any).default;

  constructor() {
    this.postTeasers = data;
  }

  public getPostsTeasers(){   
    return this.postTeasers.posts;
  }

  public getPost(i: number){
    console.log(this.postTeasers.posts[i])
    return this.postTeasers.posts[i];
  }
}
