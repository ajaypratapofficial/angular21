import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [FormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  name = "";
  email = "";
  password = "";

  submitForm() {
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Password:", this.password);
  }
}
