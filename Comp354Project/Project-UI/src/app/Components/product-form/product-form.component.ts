import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product.service';
import { AuthService } from '../../service/auth.service';
import { Product } from '../model/product';
import { AuthenticatedUser } from '../model/authenticatedUser';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService, private authService: AuthService) {

    this.productService.findAllCategories().subscribe(data=> {
          for(let item of data){
            this.categories.push(item.name);
          }
        });

    this.user = this.authService.currentUserObject();
  }

  user: AuthenticatedUser;
  categories = [];
  submitted = false;
  selectedFile: File = null;
  public imagePath;
  imgURL: any;
  public message:string;

   ngOnInit() {

     }


  onSubmit(value: any){
    this.submitted = true;
    //console.log(value);

    //this.productService.save(value.name, value.description, String(value.price), String(value.quantity), imgURL, value.category, user.name, user.id);

  }




}
