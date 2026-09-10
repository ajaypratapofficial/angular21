import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  imports: [],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements AfterViewInit {
  @ViewChild("myInput")
  input!: ElementRef<HTMLInputElement>;

  // The HTML element doesn't exist when the component class is initially constructed.
  ngAfterViewInit() {
    console.log(this.input);
  }

  focusInput() {
    this.input.nativeElement.focus();
    // this.input.nativeElement gives you actual <input> element
    // this.input.nativeElement.focus() -> calls the browser's focus() method 
  }

  clearInput() {
    this.input.nativeElement.value = "";
  }

}
