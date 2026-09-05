import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
 selector: 'app-child',
 imports: [],
 templateUrl: './child.html',
 styleUrl: './child.css'
})
export class Child implements OnChanges {

 @Input() name: string = '';

 ngOnChanges(changes: SimpleChanges) {
   console.log('ngOnChanges called');
   console.log(changes);
 }
}
