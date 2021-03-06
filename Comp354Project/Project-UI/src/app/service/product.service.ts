import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product  } from '../model/product';
import { Category } from '../model/category';
import { Department } from '../model/department';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private productsUrl: string;
  private categoriesUrl: string;
  private departmentsUrl: string;
  public selectedCategoryButtonValue = "";
  maxPriceFilter = 99999999;
  minPriceFilter = 0;
  public cart = [];

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
    this.departmentsUrl = 'http://localhost:8080/departments';
    this.categoriesUrl = 'http://localhost:8080/categories';
  }

  public addToCart(item){
    this.cart += item;
    console.log('product added to service' + this.cart);
  }


  // PRODUCTS
  public findAllProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl);
  }

  public findByProductName(productName: string): Observable<Product[]> {
        return this.http.get<Product[]>(this.productsUrl, {params: {name: productName}});
  }

  public findProductById(ProductId: string): Observable<Product> {
        return this.http.get<Product>(`${this.productsUrl}/${ProductId}`);
   }

  public deleteProductById(id: string): Observable<string> {
            return this.http.get<string>(`${this.productsUrl}/delete/${id}`);
  }

  public saveProduct(productName: string,
                     description: string,
                     price: string,
                     quantity: string,
                     categoryName: string,
                     userId: string,
                     imageUrl: string): Observable<string>
  {
  console.log(imageUrl);
  return this.http.get<string>(`${this.productsUrl}/add`, {params: {productName: productName,
                                                                    description: description,
                                                                    price: price,
                                                                    quantity: quantity,
                                                                    imageUrl: imageUrl,
                                                                    categoryName: categoryName,
                                                                    userId: userId}});
  }

  // CATEGORIES
  public findAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesUrl);
  }

    public findByCategoryByName(categoryName: string): Observable<Category[]> {
          return this.http.get<Category[]>(this.categoriesUrl, {params: {name: categoryName}});
    }

    public findCategoryById(CategoryId: string): Observable<Category> {
          return this.http.get<Category>(`${this.categoriesUrl}/${CategoryId}`);
     }

  // DEPARTMENTS
  public findAllDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>(this.departmentsUrl);
    }

    public findByDepartmentName(departmentName: string): Observable<Department[]> {
          return this.http.get<Department[]>(this.departmentsUrl, {params: {name: departmentName}});
    }

    public findDepartmentById(DepartmentId: string): Observable<Department> {
          return this.http.get<Department>(`${this.departmentsUrl}/${DepartmentId}`);
     }
}
