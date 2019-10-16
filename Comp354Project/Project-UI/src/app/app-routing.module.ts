import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/register/registration.component';
import {ProductPageComponent} from "./Components/product-page/product-page.component";
import {ProductDetailsComponent} from "./Components/product-details/product-details.component";

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'users', component: UserListComponent },
  { path: 'products', component: ProductPageComponent},
  { path: 'products/:productId', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
