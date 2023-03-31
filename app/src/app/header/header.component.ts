import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  titulo: string = "O blog do António";
  imageSrc: string = "/assets/assets/images/profile.png";
}
