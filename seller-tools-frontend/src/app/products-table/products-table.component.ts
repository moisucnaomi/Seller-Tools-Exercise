import { Component, Input } from '@angular/core';

import { Product } from '../utils/product.model';

@Component({
  selector: 'products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {
  displayedColumns: string[] = [
    'id',
    'image',
    'name',
    'category',
    'brand',
    'price',
    'reviews',
    'rating',
    'action'
  ];

  @Input() products: Product[] = [];
}
