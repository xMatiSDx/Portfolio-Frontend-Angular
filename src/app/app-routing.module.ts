import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*-------------------- COMPONENTES ------------------------*/
import { IndexComponent } from './index/index/index.component';
import { ExperienceComponent } from './experience/experience/experience.component';
import { LoginButtonComponent } from './buttons/login-button/login-button.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home',component: IndexComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
