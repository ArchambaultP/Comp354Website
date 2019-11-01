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
      return items.name.toLowerCase().includes(searchText.toLowerCase())
    })

    if(this.filteredProducts.length === 0 && searchText != ""){
        window.alert("That item isn't in the database");
        (<HTMLInputElement>document.getElementById('searchBar')).value = "";
        return products;
    }
    return this.filteredProducts;

  }

}
