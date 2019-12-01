import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/register/registration.component';
import {ProductPageComponent} from "./Components/product-page/product-page.component";
import {ProductDetailsComponent} from "./Components/product-details/product-details.component";
import {MainComponent} from "./Components/main/main.component";
import { AccountListComponent } from './Components/admin/account-list/account-list.component';
import { AccountFormComponent } from './Components/admin/account-form/account-form.component';
import {AccountUpdateComponent} from "./Components/admin/account-update/account-update.component";
import {AccountDetailsComponent} from "./Components/admin/account-details/account-details.component";
import { ProductFormComponent } from './Components/product-form/product-form.component';
import {BillingFormComponent} from './Components/billing/billing.component';
import {ShippingFormComponent} from './Components/shipping/shipping.component';
import {ShippingPage} from "./Components/shipping2/shipping2.component";
import { ReviewComponent } from './Components/review/review.component';
import { CartComponent } from './Components/cart/cart.component';
import { EmailRequestComponent } from './Components/account/email-request/email-request.component';
import { EmailVerification } from './Components/account/email-verification/email-verification.component';
import { PasswordUpdate } from './Components/account/password-update/password-update.component';
import { UserAccountComponent } from './Components/account/user-account/user-account.component';
import {OrderListComponent} from "./Components/order-list/order-list.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'products', component: ProductPageComponent, runGuardsAndResolvers: 'always' },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'admin/accounts', component: AccountListComponent},
  { path: 'admin/accounts/add', component: AccountFormComponent},
  { path: 'admin/accounts/update/:id', component: AccountUpdateComponent},
  { path: 'admin/accounts/details/:id', component: AccountDetailsComponent},
  { path: 'product-form', component: ProductFormComponent},
  { path: 'billing', component: BillingFormComponent},
  { path: 'shipping', component: ShippingFormComponent},
  { path: 'review', component: ReviewComponent},
  {path: 'cartpage', component: CartComponent},
  { path: 'account/email-request', component: EmailRequestComponent},
  { path: 'account/email-verification', component: EmailVerification},
  { path: 'account/password-update', component: PasswordUpdate},
  {path: '', component: MainComponent},
  { path: 'account/user-account', component: UserAccountComponent },
  { path: 'order/account-orders/:id', component: OrderListComponent},
  { path: 'order/orders/:id', component: OrderListComponent},
  { path: 'order/product/:id', component: OrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
