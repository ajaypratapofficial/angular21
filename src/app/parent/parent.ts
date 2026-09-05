import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

  user = {
    name: 'Ajay',
    age: 31
  };

  changeName() {
    this.user.name = 'Rahul';
  }
 
}
