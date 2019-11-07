import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  filteredProducts;

  transform(products: any={},selectedCategoryButtonValue: string='') {
    this.filteredProducts = products.filter( product => {
      return product.category.toLowerCase().includes(selectedCategoryButtonValue)
    })
    return this.filteredProducts;
  }
}
