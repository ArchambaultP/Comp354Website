import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredProducts;
  nameResults;

  transform(products: any={},searchText: string=''){
    if(!products){
      return {}
    }
    this.filteredProducts = products.filter( items => {
        this.nameResults =  items.name.toLowerCase().includes(searchText.toLowerCase());
        return this.nameResults;
    })
    console.log(searchText);
    return this.filteredProducts;
  }
}
