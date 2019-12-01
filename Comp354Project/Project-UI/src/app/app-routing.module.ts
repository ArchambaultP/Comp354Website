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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
