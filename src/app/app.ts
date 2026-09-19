import { Component } from "@angular/core";
import {
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: "app-root",
  imports: [ReactiveFormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: [""],
    email: [""],
    password: [""],
  });
}
