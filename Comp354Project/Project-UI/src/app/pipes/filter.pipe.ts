import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredProducts;

  transform(products: any={},searchText: string=''){
    if(!products){
      return {}
    }

    if(searchText == ''){
      return products;
    }
    this.filteredProducts = products.filter( items => {
      return items.name.toLowerCase().includes(searchText)
    })
    return this.filteredProducts;

  }

}
