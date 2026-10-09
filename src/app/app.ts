import { Component } from "@angular/core";
import { Observable, filter, map } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  result: number[] = [];

  numbers$ = new Observable<number>((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);

    subscriber.complete();
  });

  runObservable() {
    this.result = [];

    this.numbers$
      .pipe(
        // Operator 1
        filter((value) => value % 2 === 0),
        // Operator 2
        map((value) => value * 10),
      )
      .subscribe({
        next: (value) => {
          console.log(value);
          this.result.push(value);
        },
        complete: () => {
          console.log("Completed");
        },
      });
  }
}
