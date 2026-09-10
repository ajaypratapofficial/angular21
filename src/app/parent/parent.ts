import { Component, ViewChildren, QueryList } from "@angular/core";

import { Child } from "../child/child";

@Component({
  selector: "app-parent",
  imports: [Child],
  templateUrl: "./parent.html",
  styleUrl: "./parent.css",
})
export class Parent {

  // - The important part is using @ViewChildren to get a QueryList of all Child components in the template.
  @ViewChildren(Child)
  children!: QueryList<Child>;

  callAllChildren() {
    this.children.forEach((child) => {
      child.sayHello();
    });
  }
}
