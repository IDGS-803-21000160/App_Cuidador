import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registroCuidador, registroFamiliar } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormsRegisterService {
  private apiUrl =
    'https://cuidadorapi.azurewebsites.net/api/Usuario/registrarUsuarioWeb';

  private apiRegFam =
    'https://cuidadorapi.azurewebsites.net/api/Usuario/registrarFamiliarWeb';

  constructor(private http: HttpClient) {}

  registrarUsuarioWeb(
    usuarioData: registroCuidador
  ): Observable<registroCuidador> {
    return this.http.post<registroCuidador>(this.apiUrl, usuarioData);
  }

  reguisFamiliarWeb(famData: registroFamiliar): Observable<registroFamiliar> {
    return this.http.post<registroFamiliar>(this.apiRegFam, famData);
  }
}
