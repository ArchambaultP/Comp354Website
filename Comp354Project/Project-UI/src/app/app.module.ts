import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
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

import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RelatedItemsComponent } from './components/related-items/related-items.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LoginComponent,
    RegistrationComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    RelatedItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

