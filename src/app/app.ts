import { Component } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [Parent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
