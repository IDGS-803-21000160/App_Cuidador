import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environmentAPI } from '../../environments/environment';
import { registroCuidador } from '../interfaces/interfaces';
import { ItCuidadores } from '../interfaces/interfaceCuidador';
import { ItDocumentacion } from '../interfaces/documentacion';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  private _endPoint: string = environmentAPI.endPoint;
  private _apiURL: string =
    'http://10.16.14.88:5003/api/Usuario/mostrarDatosCuidadoresWeb';
  constructor(private router: Router, private http: HttpClient) {}

  getAllUsers(): Observable<ItCuidadores[]> {
    return this.http.get<ItCuidadores[]>(`${this._apiURL}`);
  }

  urlPutDoct: string =
    'http://10.16.14.88:5003/api/Doocumentos/updateDocumento  ';

  updateDocumentos(documentos: ItDocumentacion[] | undefined): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.urlPutDoct, documentos, { headers });
  }

  //Liberar el usuario
  apiUrlLibUser = 'http://10.16.14.88:5003/api/Usuario/updateUsuario';

  updateUsuario(usuario: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put<any>(this.apiUrlLibUser, usuario, { headers });
  }
}
