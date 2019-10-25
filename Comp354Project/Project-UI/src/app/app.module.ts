import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';


import { UserService } from './service/user.service';
import { AccountListComponent } from './Components/account-list/account-list.component';
import { AccountService } from './service/account.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
