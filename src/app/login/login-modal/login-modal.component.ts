import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

//-------------------- ng-bootstrap ---------------------------//
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  // loginForm = new FormGroup ({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })

  loginForm:FormGroup;

  constructor(public activeModal:NgbActiveModal, private formBuilder: FormBuilder) {
    this.loginForm= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]],
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
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.loginForm.markAllAsTouched(); 
    }
 
  }

}
