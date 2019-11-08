import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Category} from "../model/category";

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  filteredProducts;
  category: Category;

  transform(products: any={},selectedCategoryButtonValue: string='') {
    this.filteredProducts = products.filter( product => {
      return product.category.toLowerCase().includes(selectedCategoryButtonValue)
    })
    return this.filteredProducts;
  }
}
