import { Component, OnDestroy } from "@angular/core";
import { interval, timer, fromEvent, Subject, Subscription } from "rxjs";
import { webSocket, WebSocketSubject } from "rxjs/webSocket";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements OnDestroy {
  // ============================================
  // 1. interval()
  // ============================================

  intervalSubscription!: Subscription;

  startInterval() {
    const numbers$ = interval(1000);

    this.intervalSubscription = numbers$.subscribe({
      next: (value) => {
        console.log("interval:", value);
      },
    });
  }

  stopInterval() {
    this.intervalSubscription?.unsubscribe();

    console.log("interval stopped");
  }

  // ============================================
  // 2. timer() repeating
  // ============================================

  timerSubscription!: Subscription;

  startTimer() {
    const timer$ = timer(0, 2000);

    this.timerSubscription = timer$.subscribe({
      next: (value) => {
        console.log("timer:", value);
      },
    });
  }

  stopTimer() {
    this.timerSubscription?.unsubscribe();

    console.log("timer stopped");
  }

  // ============================================
  // 3. fromEvent()
  // ============================================

  clickSubscription!: Subscription;

  startClickListener() {
    const click$ = fromEvent(document, "click");

    this.clickSubscription = click$.subscribe({
      next: () => {
        console.log("Document clicked");
      },
    });
  }

  stopClickListener() {
    this.clickSubscription?.unsubscribe();

    console.log("click listener stopped");
  }

  // ============================================
  // 4. Long-running Subject
  // ============================================

  messageSubject = new Subject<string>();

  subjectSubscription!: Subscription;

  startSubject() {
    this.subjectSubscription = this.messageSubject.subscribe({
      next: (message) => {
        console.log("Subject:", message);
      },
    });
  }

  sendMessage() {
    this.messageSubject.next("Hello from Subject");
  }

  stopSubject() {
    this.subjectSubscription?.unsubscribe();

    console.log("Subject subscription stopped");
  }

  // ============================================
  // 5. WebSocket
  // ============================================

  socket$!: WebSocketSubject<string>;

  socketSubscription!: Subscription;

  startWebSocket() {
    this.socket$ = webSocket<string>("ws://localhost:8080");

    this.socketSubscription = this.socket$.subscribe({
      next: (message) => {
        console.log("WebSocket:", message);
      },

      error: (error) => {
        console.error("WebSocket error:", error);
      },

      complete: () => {
        console.log("WebSocket completed");
      },
    });
  }

  sendWebSocketMessage() {
    if (this.socket$) {
      this.socket$.next("Hello WebSocket");
    }
  }

  stopWebSocket() {
    this.socketSubscription?.unsubscribe();

    console.log("WebSocket disconnected");
  }

  // ============================================
  // Cleanup when Angular component is destroyed
  // ============================================

  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe();

    this.timerSubscription?.unsubscribe();

    this.clickSubscription?.unsubscribe();

    this.subjectSubscription?.unsubscribe();

    this.socketSubscription?.unsubscribe();
  }
}
