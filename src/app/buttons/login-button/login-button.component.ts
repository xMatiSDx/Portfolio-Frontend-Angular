import { Component} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FaIconLibrary, FaConfig} from '@fortawesome/angular-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { LoginModalComponent } from 'src/app/login/login-modal/login-modal.component';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {


  constructor(private library: FaIconLibrary, private faConfig: FaConfig, private modalService:NgbModal) {
    library.addIcons(faSignIn);
    faConfig.fixedWidth = true;
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
	}

}
