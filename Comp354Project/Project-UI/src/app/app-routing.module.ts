import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { AccountListComponent } from './Components/account-list/account-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'admin/accounts', component: AccountListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
