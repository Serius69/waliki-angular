import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../../model/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/employee/all`);
  }

  public addEmployee(employee: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServerUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiServerUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }
}
