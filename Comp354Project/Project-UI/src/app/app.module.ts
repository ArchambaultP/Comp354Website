import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { UserService } from './service/user.service';
import { HeaderAreaComponent } from './components/header-area/header-area.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TopBarComponent,
    HeaderAreaComponent

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
