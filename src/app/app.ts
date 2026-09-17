import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CapitalizePipe } from "./capitalize.pipe";
import { ImpurePipe } from "./impure.pipe";

@Component({
  selector: "app-root",
  imports: [CommonModule, CapitalizePipe, ImpurePipe],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  name = "ajay singh";

  price = 2500;

  salary = 123456.789;

  today = new Date();

  user = {
    id: 101,
    name: "Ajay",
    role: "Developer",
  };

  users = ["Ajay", "Rahul", "Amit"];

  addUser() {
    this.users.push("John");
  }
}
