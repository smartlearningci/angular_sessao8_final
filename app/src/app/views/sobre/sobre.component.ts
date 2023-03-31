import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  param1 : string = "";
  param2 : string = "";


  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.param1= params['param1'];
      this.param2= params['param2'];
    });
  }
}
