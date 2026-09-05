import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Cart state
  cart = signal<Product[]>([]);

  // Automatically calculates cart count
  cartCount = computed(() => this.cart().length);

  addToCart(product: Product) {

    this.cart.update(items => [...items, product]);

  }

  removeFromCart(productId: number) {

    this.cart.update(items =>
      items.filter(item => item.id !== productId)
    );

  }

  clearCart() {

    this.cart.set([]);

  }
}