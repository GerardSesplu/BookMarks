import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './core/contact/contact.component';
import { DetailsComponent } from './core/details/details.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { PrivacyComponent } from './core/privacy/privacy.component';
import { ProfileComponent } from './core/profile/profile.component';
import { SignInComponent } from './core/sign-in/sign-in.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'login', component:LoginComponent},
  {path:'contact', component:ContactComponent},
  {path:'privacy', component:PrivacyComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},



  { path: '**', pathMatch: 'full', redirectTo:'/home' } //404 cuando montemos el back

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
