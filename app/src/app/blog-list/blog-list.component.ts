import { Component } from '@angular/core';
import { LogServiceService } from '../service/log-service.service';
import { HttpDataService } from '../service/http-data.service';
import { PostHttp } from '../PostHttp';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {


  exibe : boolean = true
  posts: PostHttp[] = [];

  constructor(private dados: HttpDataService, private logService: LogServiceService) {}



  ngOnInit(){

    this.dados.getPosts().subscribe(posts => this.posts = posts);;
    this.logService.log("BlogListComponent","Mensagem1 ");

  }

  logHttp():void{ 
    console.log(this.posts);
    //this.posts= [];
    //this.dados.getPostHttp(this.posts[0]._id).subscribe(post => this.posts = post);;
    //console.log(this.posts);
  }
}
