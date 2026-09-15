import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-parent',
  imports: [Card],
  templateUrl: './parent.html',
})
export class Parent {

}
