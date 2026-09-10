import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  template: `
    <h3>{{ title }}</h3>
  `
})
export class Tab {

  @Input() title = '';

}