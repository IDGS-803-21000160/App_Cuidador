import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registroCuidador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormsRegisterService {
  private apiUrl =
    'https://cuidadorapi.azurewebsites.net/api/Usuario/registrarUsuarioWeb';

  constructor(private http: HttpClient) {}

  registrarUsuarioWeb(
    usuarioData: registroCuidador
  ): Observable<registroCuidador> {
    return this.http.post<registroCuidador>(this.apiUrl, usuarioData);
  }
}
