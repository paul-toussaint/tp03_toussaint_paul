import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  @Input() products: any[] = [];
  searchTerm: string = '';

  filterProducts(): any[] {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return this.products;
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      return this.products.filter(product =>
        product.nom.toLowerCase().includes(searchTermLower)
      );
    }
  }
}
