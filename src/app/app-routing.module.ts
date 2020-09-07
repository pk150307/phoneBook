import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

/*configuring routes*/

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'concepts', component: ConceptsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent },
  {path: 'sighup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
