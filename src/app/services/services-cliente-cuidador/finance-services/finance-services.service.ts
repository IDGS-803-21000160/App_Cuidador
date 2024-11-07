import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinanceServicesService {
  constructor(private http: HttpClient) {}

  getFinanzasUsuarioCuidador(id: string): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/Finanzas/finanzasUsuarioCuidador/${id}`;
    return this.http.get<any>(url);
  }
}
