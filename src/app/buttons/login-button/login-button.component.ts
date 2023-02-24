import { Component} from '@angular/core';
import { Router } from '@angular/router';

/*--------------------- ng-bootstrap -------------------*/
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/*--------------------- Faicon -------------------------*/
import { FaIconLibrary, FaConfig} from '@fortawesome/angular-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from 'src/app/login/login-modal/login-modal.component';

/*--------------------- AuthService ---------------------*/
import { AuthService } from 'src/app/login/login-service/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {


  constructor(private library: FaIconLibrary, 
    private faConfig: FaConfig, 
    private modalService:NgbModal, 
    private router : Router,
    public authService: AuthService) {
    library.addIcons(faSignIn, faSignOut);
    faConfig.fixedWidth = true;
  }


  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
	}

  logOut() {
    this.authService.logout();
  }

}
