import {
  Component,
  ContentChild,
  AfterContentInit,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-card",
  imports: [],
  templateUrl: "./card.html",
  styleUrls: ["./card.css"],
})
export class Card implements AfterContentInit {
  @ContentChild("cardTitle")
  title!: ElementRef<HTMLElement>;

  ngAfterContentInit() {
    console.log(this.title);
    console.log(this.title.nativeElement);
    console.log(this.title.nativeElement.textContent);
  }
}
