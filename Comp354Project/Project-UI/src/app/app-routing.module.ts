import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
