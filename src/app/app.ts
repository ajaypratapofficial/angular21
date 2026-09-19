import { Component } from "@angular/core";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [ReactiveFormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  form = new FormGroup({
    name: new FormControl(""),

    skills: new FormArray([
      new FormControl("Java"),
      new FormControl("Angular"),
    ]),
  });

  get skills() {
    return this.form.get("skills") as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl(""));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submitForm() {
    console.log(this.form.value);
  }
}
