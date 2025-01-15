import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.email, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripetiPassword: new FormControl('', [Validators.required]),
    accetto: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit(){
    console.log(this.form.value)
  }

  scriviInNome(e){
    console.log(e)
  }

  isEqual;
  controlloPassword(e){
    if(this.form.value.password == e){
      this.isEqual = true;
    } else if (this.form.value.password != e){
      this.isEqual = false;
    }
  }

}
