import { Component } from "@angular/core";
import { Child } from "../child/child";

interface User {
  name: string;
  age: number;
}

@Component({
  selector: "app-parent",
  imports: [Child],
  templateUrl: "./parent.html",
  styleUrls: ["./parent.css"],
})
export class Parent {
  user: User = {
    name: "Ajay",
    age: 31,
  };

  changeName() {
    // this.user.name = "ParentRahul";
    this.user = {
      ...this.user,
      name: "ParentRahul",
    };
  }

  onUserChanged(updatedUser: User) {
    this.user = updatedUser;
  }
  // Child
  //  │
  //  │ this.userChanged.emit(updatedUser)
  //  │
  //  ▼
  // (userChanged)
  //  │
  //  ▼
  // onUserChanged($event)
  //  │
  //  ▼
  // Parent user
}
