import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostHttp } from 'src/app/PostHttp';

import { HttpDataService } from '../../service/http-data.service';
@Component({
  selector: 'Post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {


  id : string = '';


  post: PostHttp = {
    titulo: '',
    dataPublicacao: '',
    tempoDeLeitura: '',
    comentarios: '',
    pequenaDescricao: '',
    imagem: '',
    id: '',
    seoTitulo: '',
    __v: '',
    _id: ''
  };


  constructor(private route: ActivatedRoute,private dados: HttpDataService) { }
  

  ngOnInit(): void {
      

    this.id = String(this.route.snapshot.paramMap.get('id'));

    this.dados.getPostHttp(this.id).subscribe(post => this.post = post);
    
  }

}