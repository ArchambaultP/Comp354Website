import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AccountListComponent } from './Components/admin/account-list/account-list.component';
import { AdminService } from './service/admin.service';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';
import { ProductService } from './service/product.service';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './service/auth.service';
import { Injectable } from '@angular/core';
import { UserService } from './service/user.service';
import { RegistrationComponent } from './Components/register/registration.component';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpInterceptorService } from './service/httpInterceptor.service';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RelatedItemsComponent } from './Components/related-items/related-items.component';
import { ProductCategoriesComponent } from './Components/product-categories/product-categories.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import {MatCardModule} from '@angular/material/card';
import { AccountFormComponent } from './Components/admin/account-form/account-form.component';
import { AccountUpdateComponent } from './Components/admin/account-update/account-update.component';
import { AccountDetailsComponent } from './Components/admin/account-details/account-details.component';
import { EmailRequestComponent } from './Components/account/email-request/email-request.component';
import { EmailVerification } from './Components/account/email-verification/email-verification.component';
import { PasswordUpdate } from './Components/account/password-update/password-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
    MatButtonModule, MatDialogModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatSortModule,
    MatTableModule
} from "@angular/material/";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OrderListComponent } from './Components/order-list/order-list.component';
import {OrderService} from "./service/order.service";
import { SocialMediaButtonsComponent } from './Components/social-media-buttons/social-media-buttons.component';
import { ButtonsModule, InputsModule } from 'angular-bootstrap-md';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { UserAccountComponent } from './Components/account/user-account/user-account.component';
import {PaypalComponent} from './Components/paypal/paypal.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    DepartmentListComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    RelatedItemsComponent,
    ProductCategoriesComponent,
    FilterPipe,
    CategoryPipe,
    AccountListComponent,
    AccountFormComponent,
    AccountUpdateComponent,
    AccountDetailsComponent,
    EmailRequestComponent,
    EmailVerification,
    PasswordUpdate,
    OrderListComponent,
    SocialMediaButtonsComponent,
    UserAccountComponent,
    PaypalComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        NgbModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        MatPaginatorModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        ButtonsModule,
        InputsModule,
        JwSocialButtonsModule,
        NgxPayPalModule,
      ],
  providers: [UserService, AuthService, AdminService, ProductService, OrderService],
  bootstrap: [AppComponent],
  entryComponents: [RegistrationComponent]
})

export class AppModule { }
