import { Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html'
})
export class Parent {

  @ViewChild(Child) child!: Child;

  callChildMethod() {
    this.child.sayHello();
  }
}