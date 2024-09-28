import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registroCuidador, registroFamiliar } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormsRegisterService {
  private apiUrl = 'http://10.16.14.88:5003/api/Usuario/registrarUsuarioWeb';

  private apiRegFam =
    'http://10.16.14.88:5003/api/Usuario/registrarFamiliarWeb';

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
