import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience/experience.component';
import { ExperienceItemsComponent } from './experience/experience-items/experience-items.component';

import { IndexComponent } from './index/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'experience', component: ExperienceComponent}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
