import { Injectable } from '@angular/core';
import { environmentAPI } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private _endPoint: string = environmentAPI.endPoint;

  constructor(private http: HttpClient) {}

  getPersona(idUsuario: number): Observable<any> {
    const url = `${this._endPoint}/crm/Persona/getPersona/${idUsuario}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>(url, { headers });
  }
}
