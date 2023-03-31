import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators, FormArray  } from '@angular/forms';
import { HttpDataService } from 'src/app/service/http-data.service';
import { PostHttp, PostHttpSend } from 'src/app/PostHttp';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})


export class SettingsComponent {


  isNovo :boolean = true;

  postExistente : PostHttp ={
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
  }


  constructor(private route: ActivatedRoute,private fb: FormBuilder, private dados: HttpDataService) { }

  novoPost: PostHttpSend = {
    titulo: '',
    dataPublicacao: '',
    tempoDeLeitura: '',
    comentarios: '',
    pequenaDescricao: '',
    imagem: '',
    id: '',
    seoTitulo: ''
  };



  id : string = '';
  postForm = this.fb.group({
    detalhes: this.fb.group({
      titulo: [''],
      dataDaPublicacao: [''],
      tempoDeLeitura: [''],
      comentarios: [''],
      imagem: [''],
      tituloSeo: ['']
    }),
    postLinhas: this.fb.array([   
      this.fb.control('')
    ])
  });


  gravaDetalhes(){
    console.log(this.postForm.get('detalhes')?.get('titulo')?.value);
    

    if (this.isNovo) {

      this.novoPost.titulo = String(this.postForm.get('detalhes')?.get('titulo')?.value);
      this.novoPost.dataPublicacao  = String(this.postForm.get('detalhes')?.get('dataPublicacao')?.value);
      this.novoPost.tempoDeLeitura  = String(this.postForm.get('detalhes')?.get('tempoDeLeitura')?.value);
      this.novoPost.comentarios  = String(this.postForm.get('detalhes')?.get('comentarios')?.value);
      this.novoPost.pequenaDescricao  = String(this.postForm.get('detalhes')?.get('pequenaDescricao')?.value);
      this.novoPost.imagem  = String(this.postForm.get('detalhes')?.get('imagem')?.value);
      this.novoPost.seoTitulo  = String(this.postForm.get('detalhes')?.get('tituloSeo')?.value);
      this.novoPost.pequenaDescricao = "Esta descrição será sempre a mesma....";

      this.dados.addPostHttp(this.novoPost).subscribe();
    } 
    else
     {
      this.postExistente.titulo = String(this.postForm.get('detalhes')?.get('titulo')?.value);
      this.postExistente.dataPublicacao  = String(this.postForm.get('detalhes')?.get('dataPublicacao')?.value);
      this.postExistente.tempoDeLeitura  = String(this.postForm.get('detalhes')?.get('tempoDeLeitura')?.value);
      this.postExistente.comentarios  = String(this.postForm.get('detalhes')?.get('comentarios')?.value);
      this.postExistente.pequenaDescricao  = String(this.postForm.get('detalhes')?.get('pequenaDescricao')?.value);
      this.postExistente.imagem  = String(this.postForm.get('detalhes')?.get('imagem')?.value);
      this.postExistente.seoTitulo  = String(this.postForm.get('detalhes')?.get('tituloSeo')?.value);
      this.postExistente.pequenaDescricao = "Esta descrição será sempre a mesma....";

      this.dados.updatePostHttp(this.postExistente).subscribe();
    }
    
    console.log(this.postForm);
  }
  atualizarLinhas() {
    console.log(this.postForm);
  }

  get postLinhas() {
    return this.postForm.get('postLinhas') as FormArray;
  }


  adicionaLinha() {
    this.postLinhas.push(this.fb.control(''));
  }


  ngOnInit(): void {

    this.id = String(this.route.snapshot.paramMap.get('id'));

    if (this.id !=null)
      {
        this.isNovo = false;
        this.dados.getPostHttp(this.id).subscribe(post => this.recebePost(post));
      
      }

    
  }


  recebePost(postExistente: PostHttp):void{
      
    this.postForm.patchValue({
      detalhes: {
        titulo: postExistente.titulo,
        dataDaPublicacao: postExistente.dataPublicacao,
        tempoDeLeitura: postExistente.tempoDeLeitura,
        comentarios: postExistente.comentarios,
        imagem: postExistente.imagem,
        tituloSeo: postExistente.seoTitulo
      }
    });

    console.log("--------------------");
      console.log(postExistente);
      console.log("--------------------");

      this.postExistente = postExistente;
  }
}
