import { Component, inject } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { finalize } from "rxjs";

import { EmployeeService } from "./services/employee.service";
import { Employee } from "./models/employee";

@Component({
  selector: "app-root",
  imports: [],
  standalone: true,
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  private employeeService = inject(EmployeeService);

  employees: Employee[] = [];

  loading = false;
  errorMessage = "";

  loadEmployees() {
    this.loading = true;
    this.errorMessage = "";

    this.employeeService
      .getEmployees()
      .pipe(
        finalize(() => {
          this.loading = false;
        }),
      )
      .subscribe({
        next: (data) => {
          this.employees = data;
        },

        error: (error: HttpErrorResponse) => {
          if (error.status === 0) {
            this.errorMessage = "Unable to connect to the server.";
          } else {
            this.errorMessage = `Request failed: ${error.status}`;
          }
        },
      });
  }
}
