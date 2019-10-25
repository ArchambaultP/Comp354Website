import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { TestLoginPageComponent } from './Components/test-login-page/test-login-page.component';
import { IndexAreaComponent } from  './Components/index-area/index-area.component';
const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'register', component: UserListComponent },
  { path: 'login', component: TestLoginPageComponent },
  { path: 'search', component: UserListComponent },
  { path: 'cart', component: UserListComponent },
  { path: 'checkout', component: UserListComponent },
  { path: 'trending', component: UserListComponent },
  { path: 'popular', component: UserListComponent },
  { path: 'new', component: UserListComponent },
  { path: 'recent', component: UserListComponent },
  { path: 'nextpage', component: UserListComponent },
  { path: 'prevpage', component: UserListComponent },
   {path: '',component: IndexAreaComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
