import { Component } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  numbers: number[] = [];

  status = "Not Started";

  // Create Observable
  numbers$ = new Observable<number>((subscriber) => {
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);

    subscriber.complete();
  });

  // Subscribe to Observable
  runObservable() {
    this.numbers = [];
    this.status = "Running";

    this.numbers$.subscribe({
      next: (value) => {
        this.numbers.push(value);
      },

      error: (error) => {
        this.status = "Error";
        console.error(error);
      },

      complete: () => {
        this.status = "Completed";
      },
    });
  }
}
