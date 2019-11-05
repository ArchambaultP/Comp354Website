import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { DepartmentListComponent } from './Components/department-list/department-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: 'departments', component: DepartmentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
