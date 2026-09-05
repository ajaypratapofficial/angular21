import { Component, inject } from '@angular/core';
import { CartService, Product as ProductModel } from '../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  private cartService = inject(CartService);

  products: ProductModel[] = [
    {
      id: 1,
      name: 'iPhone 17',
      price: 79999,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'MacBook Air',
      price: 99999,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'AirPods',
      price: 19999,
      image: 'https://via.placeholder.com/150'
    }
  ];

  addToCart(product: ProductModel) {

    this.cartService.addToCart(product);

  }
}