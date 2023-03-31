import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {

  constructor(private router: Router) { }

  subscritor: string = 'Introduza o seu email';
  dataAtual : Date = new Date();

  agradecer():void{
    this.subscritor = "";
    this.router.navigate(['/sobre'],{queryParams: {param1: 'Obrigado' , param2: ' pela informação'}})
  }


}