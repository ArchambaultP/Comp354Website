import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/register/registration.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent},
<<<<<<< Updated upstream
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: 'departments', component: DepartmentListComponent }
=======
  { path: 'createProduct', component: ProductFormComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
