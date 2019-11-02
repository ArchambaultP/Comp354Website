import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { BasicFormComponent } from './Components/basic-form/basic-form.component';


import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    BasicFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
