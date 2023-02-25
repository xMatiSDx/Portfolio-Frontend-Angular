import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//-------------------- ng-bootstrap ---------------------------//
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

//-------------------- AuthService ----------------------------//
import { AuthService } from '../login-service/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {


  loginForm:FormGroup;

  constructor(public activeModal:NgbActiveModal, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private authService: AuthService) {
    this.loginForm= this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(4)]],
   })
  }

  get password(){
    return this.loginForm.get("password");
  }
 
  get email(){
   return this.loginForm.get("email");
  }

  get passwordValid(){
    return this.password?.touched && !this.password?.valid;
  }

  get emailValid() {
    return this.email?.touched && !this.email?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.loginForm.valid){  
      // Llamamos a nuestro servicio para enviar los datos al servidor
      this.authService.login(this.loginForm.get("email"), this.loginForm.get("password"))
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }
    // if (this.authService.login(this.email, this.password)) {
    //   alert("Wrong Credentials");
    //   setTimeout(function() {
    //   }.bind(this), 2500);
    // }
    else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.loginForm.markAllAsTouched(); 
    }
  }

}
