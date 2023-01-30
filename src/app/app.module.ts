import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CoverComponent } from './cover/cover/cover.component';
import { EditButtonComponent } from './buttons/edit-button/edit-button.component';
import { LoginButtonComponent } from './buttons/login-button/login-button.component';
import { LoginModalComponent } from './login/login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    CoverComponent,
    EditButtonComponent,
    LoginButtonComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  };
}
