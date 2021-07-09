import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donacion } from '../model/donacion';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class DonacionService {
  private baseUrl = 'http://localhost:8081/';

  constructor(private http: HttpClient){}

  // pantalla principal
  public donacionPprincipal(): Observable<Donacion[]> {
    return this.http.get<Donacion[]>(`${this.baseUrl}donacion`);
  }


}
