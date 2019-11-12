import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccountListComponent } from './Components/admin/account-list/account-list.component';
import { AccountService } from './service/account.service';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';
import { ProductService } from './service/product.service';
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
import { AccountFormComponent } from './Components/admin/account-form/account-form.component';
import { AccountUpdateComponent } from './Components/admin/account-update/account-update.component';
import { AccountDetailsComponent } from './Components/admin/account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    DepartmentListComponent
    LoginComponent,
    RegistrationComponent,
    AccountListComponent,
    AccountFormComponent,
    AccountUpdateComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, ProductService],
  providers: [UserService, AuthService, AccountService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

