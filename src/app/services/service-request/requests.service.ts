import { Injectable } from '@angular/core';
import { environmentAPI } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  updateRequestStatus(idFeedback: any, nuevoEstatus: string) {
    throw new Error('Method not implemented.');
  }
  private _endPoint: string = environmentAPI.endPoint;
  private _apiURL: string =
    'https://cuidadorapi.azurewebsites.net/api/Usuario/mostrarDatosCuidadoresWeb';
  constructor(private router: Router, private http: HttpClient) {}

  getAllRequests() {
    return this.http.get(
      'https://cuidadorapi.azurewebsites.net/api/Feedback/getFeedback'
    );
  }

  aceptarFeedback(id: number, idEstatus: number): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/Feedback/aceptarFeedback/${id}/${idEstatus}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(url, {}, { headers });
  }
}
