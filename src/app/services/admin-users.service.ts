import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environmentAPI } from '../../environments/environment';
import { registroCuidador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdminUsersService {
  private _endPoint: string = environmentAPI.endPoint;
  private _apiURL: string = this._endPoint + 'DatosUsuario';
  constructor(private router: Router, private http: HttpClient) {}

  getAllUsers(): Observable<registroCuidador[]> {
    return this.http.get<registroCuidador[]>(`${this._apiURL}`);
  }
}
