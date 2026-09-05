import { Component, Input, SimpleChanges } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // @Input() name: string = '';

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called');

  //   console.log(changes);
  // }

  @Input() user!: User;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['user']);
  }
}
