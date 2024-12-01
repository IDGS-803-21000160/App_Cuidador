import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FamiliarServicesService {
  constructor(private http: HttpClient) {}

  registerFamiliar(data: any): Observable<any> {
    const url =
      'https://cuidadorapi.azurewebsites.net/api/Usuario/registrarFamiliarWeb';
    return this.http.post<any>(url, data);
  }

  registerAdultoMayor(data: any): Observable<any> {
    const url =
      'https://cuidadorapi.azurewebsites.net/api/Usuario/regAdultoMayor';
    return this.http.post<any>(url, data);
  }
}
