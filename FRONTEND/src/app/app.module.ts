import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { DetailsComponent } from './core/details/details.component';
import { ProfileComponent } from './core/profile/profile.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { LoginComponent } from './core/login/login.component';
import { ContactComponent } from './core/contact/contact.component';
import { PrivacyComponent } from './core/privacy/privacy.component';
import { CardHomeComponent } from './shared/component/card-home/card-home.component';
import { CardProfileComponent } from './shared/component/card-profile/card-profile.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { ErrorLoginComponent } from './shared/dialog/error-login/error-login.component';

//materilas
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { HttpClientModule } from "@angular/common/http";
import { CardStarComponent } from './shared/component/card-star/card-star.component';
import { CookiesComponent } from './shared/dialog/cookies/cookies.component';
import { ErrorSignInComponent } from './shared/dialog/error-sign-in/error-sign-in.component';
import { AddBookToProfileComponent } from './shared/dialog/add-book-to-profile/add-book-to-profile.component';
import { HeaderProfileComponent } from './shared/component/header-profile/headerProfile.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderProfileComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    ProfileComponent,
    SignInComponent,
    LoginComponent,
    ContactComponent,
    PrivacyComponent,
    CardHomeComponent,
    CardProfileComponent,
    CardStarComponent,
    ForgotPasswordComponent,
    ErrorLoginComponent,
    CookiesComponent,
    ErrorSignInComponent,
    AddBookToProfileComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
