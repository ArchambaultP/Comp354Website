import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/register/registration.component';
import { AccountListComponent } from './Components/admin/account-list/account-list.component';
import { AccountFormComponent } from './Components/admin/account-form/account-form.component';
import {AccountUpdateComponent} from "./Components/admin/account-update/account-update.component";
import {AccountDetailsComponent} from "./Components/admin/account-details/account-details.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'admin/accounts', component: AccountListComponent},
  { path: 'admin/accounts/add', component: AccountFormComponent},
  { path: 'admin/accounts/update/:id', component: AccountUpdateComponent},
  { path: 'admin/accounts/details/:id', component: AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
