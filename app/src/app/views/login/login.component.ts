import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


    formLoginComp = {
      email: 'email',
      password: 'pass',
    };


    onSubmit(f: NgForm) {
      console.log(f.value); 
      console.log(f.valid);  
      console.log(f.invalid);  
      console.log(f.errors); 
      console.log(this.formLoginComp);
      console.log(this.formLoginComp.password);
  }

}