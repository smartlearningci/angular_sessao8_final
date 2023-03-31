import data from '../../assets/json/data.json';

export class DataService {

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
