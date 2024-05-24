import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  private baseURL="http://localhost:8080/api/salaries";
  constructor(private httpClient:HttpClient) { }
  getSalaryList():Observable<Salary[]>{
    return this.httpClient.get<Salary[]>(`${this.baseURL}`);
  }
  createSalary(salary:Salary):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,salary);
  }

  getSalaryById(id:number):Observable<Salary>{
    return this.httpClient.get<Salary>(`${this.baseURL}/${id}`);
  }

  updateSalary(id:number,salary:Salary):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,salary);
  }

  deleteSalary(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getEmployeeDetails(employeeId:number):Observable<any>{
    return this.httpClient.get<any>(`http://localhost:8080/api/employees/employeeId/${employeeId}`);
  }

  getEmployeeIds(): Observable<number[]> {
    return this.httpClient.get<number[]>('http://localhost:8080/api/employees/ids')
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching employee IDs:', error);
          return throwError('An error occurred while fetching employee IDs. Please try again later.');
        })
      );
  }
  
}
