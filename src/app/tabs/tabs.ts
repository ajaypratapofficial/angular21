import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

import { Tab } from '../tab/tab';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html'
})
export class Tabs implements AfterContentInit {

  @ContentChildren(Tab)
  tabs!: QueryList<Tab>;

  ngAfterContentInit() {

    console.log('Number of tabs:', this.tabs.length);

    this.tabs.forEach(tab => {
      console.log(tab.title);
    });

  }
}