import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories = [];
  res: string;
  submitted = false;
  selectedFile: File = null;
  imgURL: any;
  public imagePath;
  public message: string;

  constructor(private productService: ProductService,
              private authService: AuthService) {
    this.productService.findAllCategories().subscribe(data=> {
          for(let item of data){
            this.categories.push(item.name);
          }
    });
  }

   ngOnInit() {

   }

  onSubmit(value: any){
    this.submitted = true;
    console.log("YESS")
    console.log(value);
    console.log(this.authService.currentUserId());

    this.productService.saveProduct(value.name,
                                    value.description,
                                    value.price,
                                    value.quantity,
                                    value.category,
                                    this.authService.currentUserId()).subscribe(result => {
                                        this.res = result;
                                    })
    console.log(this.res);
    console.log("WOOWW")

    //const fd = new FormData();
    //fd.append('image', this.selectedFile, this.selectedFile.name);
    //this.http.post('', fd).subscribe(res => {console.log(res)});
  }


  onFileSelected(files){
    //this.selectedFile = <File>event.target.files[0];
    if (files.length === 0)
        return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
            return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
        this.imgURL = reader.result;
    }
  }
}
