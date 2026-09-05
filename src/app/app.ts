import { Component } from '@angular/core';
import { Parent } from './parent/parent';
import { Navbar } from './navbar/navbar';
import { Product } from './product/product';
import { Cart } from './cart/cart';

@Component({
  selector: 'app-root',
  imports: [Parent, Navbar, Product, Cart],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {

}
