import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ProyectoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
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

}
