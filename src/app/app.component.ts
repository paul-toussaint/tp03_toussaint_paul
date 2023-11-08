
  import { Component, OnInit } from '@angular/core';
  import { ProductService } from './product.service';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements OnInit {
    title = 'TP3';
    productsList: any[] = [];
  
    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.productService.getProducts().subscribe(
        (data: any[]) => {
          this.productsList = data;
        },
        error => {
          console.error('Error fetching products', error);
        }
      );
    }
  }
  