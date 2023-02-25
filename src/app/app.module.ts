import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

//------------------- ng-boostrap -------------------------//
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

//------------------- fontawesome -------------------------//
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//------------------- components -------------------------//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index/index.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CoverComponent } from './cover/cover/cover.component';
import { EditButtonComponent } from './buttons/edit-button/edit-button.component';
import { LoginButtonComponent } from './buttons/login-button/login-button.component';
import { LoginModalComponent } from './login/login-modal/login-modal.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ExperienceItemsComponent } from './experience/experience-items/experience-items.component';
import { ExperienceEditModalComponent } from './experience/experience-edit-modal/experience-edit-modal.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    CoverComponent,
    EditButtonComponent,
    LoginButtonComponent,
    LoginModalComponent,
    ExperienceComponent,
    ExperienceItemsComponent,
    ExperienceEditModalComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterLinkActive,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    FontAwesomeModule,
    NgbCollapseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  };
}
