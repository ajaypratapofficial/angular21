import { Component } from '@angular/core';
import { Tabs } from '../tabs/tabs';
import { Tab } from '../tab/tab';


@Component({
  selector: 'app-parent',
  imports: [Tabs, Tab],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {

}
