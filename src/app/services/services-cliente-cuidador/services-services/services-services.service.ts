import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesServicesService {
  constructor(private http: HttpClient) {}

  getComentariosCuidador(id: string): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/comentarios/${id}`;
    return this.http.get<any>(url);
  }

  getHorariosCuidador(id: string): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/horariosCuidador/${id}`;
    return this.http.get<any>(url);
  }
}
