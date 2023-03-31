import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogServiceService } from 'src/app/service/log-service.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

  @Input('titulo') postTitulo = '';
  @Input('imagem') postImagem = '';
  @Input('dataPublicacao') postDataPublicacao = '';
  @Input('pequenaDescricao') postPequenaDescricao = '';
  @Input('tempoDeLeitura') postTempoDeLeitura = '';
  @Input('id') postId = '';
  @Input('seoTitulo') postSeoTitulo = '';
  @Input('_id') post_Id= '';
  @Output() apagaPostComId= new EventEmitter<string>();

  constructor( private logService: LogServiceService) {}

  ngOnInit(){
    this.logService.log("BlogPostComponent", "TESTE");
  }

  apagaPost() {

    this.apagaPostComId.emit(this.post_Id);
  }
}