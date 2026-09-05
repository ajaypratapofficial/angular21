import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
 selector: 'app-child',
 imports: [],
 templateUrl: './child.html',
 styleUrl: './child.css'
})
export class Child implements OnChanges {

  @Input() user!: User;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['user']);
  }
}
