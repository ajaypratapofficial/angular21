import { Injectable, inject } from "@angular/core";

import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, catchError, throwError } from "rxjs";

import { Employee } from "../models/employee";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private http = inject(HttpClient);

  private apiUrl = "http://localhost:8080/api/employees";

  // 1. GET - Fetch all employees
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  // GET - Fetch employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  // 2. POST - Create a new employee
  createEmployee(employee: Omit<Employee, "id">): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  // 3. PUT - Update/replace employee data
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  }

  // 4. PATCH - Update selected employee fields
  patchEmployee(id: number, changes: Partial<Employee>): Observable<Employee> {
    return this.http.patch<Employee>(`${this.apiUrl}/${id}`, changes);
  }

  // 5. DELETE - Delete employee
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // 6. HTTP Headers
  getEmployeesWithHeaders(): Observable<Employee[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-App-Source": "Angular",
    });

    return this.http.get<Employee[]>(this.apiUrl, { headers });
  }

  // 7. Query Parameters
  searchEmployees(department: string, page: number): Observable<Employee[]> {
    const params = new HttpParams()
      .set("department", department)
      .set("page", page)
      .set("size", "10");

    return this.http.get<Employee[]>(this.apiUrl, { params });
  }
  // GET /api/employees?department=IT&page=1&size=10

  // 8. Request Body is demonstrated in POST, PUT and PATCH above.

  // 9. Handling complete HTTP response
  getEmployeesWithResponse() {
    return this.http.get<Employee[]>(this.apiUrl, { observe: "response" });
  }

  // 10. Error Handling
  getEmployeesWithErrorHandling(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("API Error:", error.message);

        return throwError(() => error);
      }),
    );
  }
}
