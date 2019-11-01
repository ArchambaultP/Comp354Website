import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  filteredProducts;

  transform(products: any={},searchText: string='', inCategory: boolean){
    if(!products){
      return {}
    }
    this.filteredProducts = products.filter( items => {
        return items.name.toLowerCase().includes(searchText.toLowerCase())
    })

    // Runs if no products are found
    // if(this.filteredProducts.length === 0 && searchText != ""){
    //     window.alert("That item isn't in the database");
    //     (<HTMLInputElement>document.getElementById('searchBar')).value = "";
    //
    //     return products;
    // }
    console.log(searchText);
    return this.filteredProducts;
}
