import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {

  sayHello() {
    console.log('Hello from Child');
  }

}
