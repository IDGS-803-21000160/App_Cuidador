import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environmentAPI } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any;
  private _endPoint: string = environmentAPI.endPoint;
  private _apiURL: string = this._endPoint + 'users';
  usuarios: ItUsuario[] = [];

  constructor(private router: Router, private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  //EndPoint Para obtener los usuarios
  getUsers(): Observable<ItUsuario[]> {
    return this.http.get<ItUsuario[]>(`${this._apiURL}`);
  }

  async fetchUsers(): Promise<ItUsuario[]> {
    try {
      const data = await this.getUsers().toPromise();
      return data ?? []; // Asegurarse de que siempre se devuelve un array
    } catch (error) {
      console.error('Error obtencion de Usuarios', error);
      return [];
    }
  }

  async login(user: any): Promise<boolean> {
    let flag = false;
    this.usuarios = await this.fetchUsers();

    // Lógica de autenticación
    for (const users of this.usuarios) {
      console.log(users);
      if (user.email === users.usuario && user.password === users.contrasenia) {
        this.currentUser = { ...user, role: 'admin' };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        console.log('Llego aca');
        flag = true;
        break;
      } else {
        console.log('El false');
      }
    }
    return flag;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    console.log(this.currentUser, 'Yo soy el current User');

    return this.currentUser != null;
  }

  getUserRole(): string {
    return this.currentUser?.role;
  }

  redirectUrl(): string {
    const role = this.getUserRole();
    console.log('Yo soy el rol', role);

    switch (role) {
      case 'admin':
        console.log('entre a admins');

        return '/administrador';
      case 'popo':
        console.log('entre a popo');

        return '/doctor/dashboard';
      case 'tete':
        return '/admin/dashboard';
      default:
        console.log('entre a Login');

        return '/login';
    }
  }
}
