import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccountListComponent } from './Components/account-list/account-list.component';
import { AccountService } from './service/account.service';
import { UserListComponent } from './Components/user-list/user-list.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './service/auth.service';
import { Injectable } from '@angular/core';
import { UserService } from './service/user.service';
import { RegistrationComponent } from './Components/register/registration.component';
RegistrationComponent
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptorService } from './service/httpInterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    RegistrationComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AuthService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }

