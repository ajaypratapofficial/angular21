import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

interface User {
  name: string;
  age: number;
}

@Component({
  selector: "app-child",
  imports: [],
  templateUrl: "./child.html",
  styleUrls: ["./child.css"],
})
export class Child implements OnChanges {
  // Parent → Child
  @Input() user!: User;

  // Child → Parent
  @Output() userChanged = new EventEmitter<User>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes["user"]);
  }

  changeNameFromChild() {
    const updatedUser = {
      ...this.user,
      name: "ChildRahul",
    };

    this.userChanged.emit(updatedUser);
    // Child
    //   │
    //   │ emit(updatedUser)
    //   ▼
    // Parent
  }
}
