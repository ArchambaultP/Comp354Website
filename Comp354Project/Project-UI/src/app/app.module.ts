import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Components/user-list/user-list.component';


import { UserService } from './service/user.service';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RelatedItemsComponent } from './components/related-items/related-items.component';
import { ProductCategoriesComponent } from './Components/product-categories/product-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProductPageComponent,
    ProductDetailsComponent,
    RelatedItemsComponent,
    ProductCategoriesComponent
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
