import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredProducts;
  results;
  transform(products: any={},searchText: string=''){
    if(!products){
      return {}
    }
    this.filteredProducts = products.filter( items => {
        this.results =  items.name.toLowerCase().includes(searchText.toLowerCase());
        return this.results;
    })
    console.log(searchText);
    return this.filteredProducts;
  }
}
