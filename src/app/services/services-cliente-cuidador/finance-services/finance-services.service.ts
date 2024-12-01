import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getFinanzasUsuarioFamiliar(id: string): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/Finanzas/finanzasUsuarioCliente/${id}`;
    return this.http.get<any>(url);
  }

  getFinanzasListaContratos(
    idUser: string,
    tipousuario: string
  ): Observable<any> {
    const url = `https://cuidadorapi.azurewebsites.net/api/ContratoItem/listarContrato/${idUser}/${tipousuario}`;
    return this.http.get<any>(url);
  }

  retirarSaldoCuidador(data: {
    idCuentaBancaria: number;
    importe: number;
    idSaldo: number;
    usuarioId: number;
  }): Observable<string> {
    const url =
      'https://cuidadorapi.azurewebsites.net/api/Finanzas/retirarSaldo';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<string>(url, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  registrarCuentaBancaria(data: {
    usuarioId: number;
    numeroCuenta: number;
    clabeInterbancaria: number;
    nombreBanco: string;
  }): Observable<string> {
    const url =
      'https://cuidadorapi.azurewebsites.net/api/Finanzas/registrarCuentaBancaria';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<string>(url, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
