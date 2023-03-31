import { Component, OnInit } from '@angular/core';
import { LogServiceService } from '../service/log-service.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  
  constructor(public logService:LogServiceService) { }

  ngOnInit(): void {
  }

}