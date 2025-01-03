import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = "http://localhost:8080/api/employee"


  constructor(private http:HttpClient) { }

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL);
  }

  addEmploye(employee: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiURL,employee);
  }
  deleteEmployee(id: number):Observable<any>{
    return this.http.delete<Employee>(`${this.apiURL}/${id}`);
  }

}
