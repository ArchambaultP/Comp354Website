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
import { CartService } from './service/cart.service';
import { StorageService } from './service/storage.service';
RegistrationComponent
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
import {BillingFormComponent} from './Components/billing/billing.component';
import {ShippingFormComponent} from './Components/shipping/shipping.component';
import { ReviewComponent } from './Components/review/review.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { ShippingPage} from './Components/shipping2/shipping2.component';
import { CartComponent } from './Components/cart/cart.component';

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
    BillingFormComponent,
    ShippingFormComponent,
    ReviewComponent,
    CartComponent,
    ShippingPage,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [UserService, AuthService, AdminService, ProductService, CartService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
