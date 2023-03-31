import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  formResetComp = {
      email: '',
    };

  onSubmit(f: NgForm) {
      console.log(f.value); 
      console.log(f.valid);  
      console.log(f.invalid);  
      console.log(f.errors);  
      console.log(this.formResetComp.email);
      this.formResetComp.email = "";
      f.reset();
      console.log(this.formResetComp.email);
  }
}
