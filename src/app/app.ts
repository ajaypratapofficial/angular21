import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [ReactiveFormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  submitForm() {
    console.log(this.form.value);
  }
}
