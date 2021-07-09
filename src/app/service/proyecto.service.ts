import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class ProyectoService {
  // private apiServerUrl = environment.apiBaseUrl;

  private baseUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient){}

  getProyectoVigentes(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'estado/1');
  }
  getProyectos(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'estado/4');
  }
  paginaPrincipal(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'paginaprincipal');
  }

  /*
  public getProyectoVigentes(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/estado/1`);
  }
  public getProyectoEnProceso(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/estado/2`);
  }
  public getProyectoFinalizado(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/estado/3`);
  }
  public getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/estado/4`);
  }
  // pantalla principal
  public paginaPrincipal(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/estado/4`);
  }

  public addEmployee(employee: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(`${this.apiServerUrl}/employee/add`, employee);
  }
   */


}
