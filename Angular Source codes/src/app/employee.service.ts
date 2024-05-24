import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';
import { Message } from './Message';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl="http://localhost:8080/api/v1/employees"
  private baseUrl="http://localhost:8080/api/employees"
  constructor(private httpClient:HttpClient) { }

  getEmployeesList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  // createEmployee(employee:Employee):Observable<Object>{
  //   return this.httpClient.post(`${this.baseUrl}`,employee);
  // }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, employee).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500 && error.error && error.error.message && error.error.message.includes('duplicate key value violates unique constraint')) {
          return throwError('Email Already Exists');
        } else {
          return throwError('Email or EmployeeID already Exists');
        }
      })
    );
  }
  
  checkEmployeeEmailExists(email:String){
    var url = `${this.baseUrl}/find/`+email;
    //console.log(this.httpClient.get(url));
    return this.httpClient.get<Message>(url);

  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  // updateEmployee(id:number,employee:Employee):Observable<Object>{
  //   return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  // }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500 && error.error && error.error.message && error.error.message.includes('duplicate key value violates unique constraint')) {
          return throwError('Email Already Exists');
        } else {
          return throwError('Email already Exists');
        }
      })
    );
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  


}
