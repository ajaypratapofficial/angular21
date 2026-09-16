import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-child",
  imports: [],
  templateUrl: "./child.html",
  styleUrl: "./child.css",
})
export class Child {
  @Input() name!: string;

  // Angular automatically detects changes in input properties, so ngOnChanges is not strictly necessary unless you need to perform additional actions when the input changes.
  // If you do need to perform additional actions when the input changes, you can implement the ngOnChanges lifecycle hook.
  // Example of using ngOnChanges:

  ngOnChanges(changes: SimpleChanges) {
    if (changes["name"]) {
      console.log("changes object:", changes);
      console.log("Name changed to:", changes["name"].currentValue);
    }
  }
}

