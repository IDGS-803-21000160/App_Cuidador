import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environmentAPI } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItUsuario } from '../interfaces/usuario';
import { ItDomicilio } from '../interfaces/domicilio';
import { EventServiceService } from '../services/event-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: any;
  private _endPoint: string = environmentAPI.endPoint;
  private _apiURL: string = `${this._endPoint}Usuario/loginWeb`;
  usuarios: ItUsuario[] = [];
  tipousuario: number = 0;
  flag: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private eventService: EventServiceService
  ) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  //EndPoint Para obtener los usuarios
  /* 
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
*/
  async login(user: {
    usuario: string;
    contrasenia: string;
  }): Promise<boolean> {
    return this.http
      .post<any>(this._apiURL, user)
      .toPromise()
      .then((response) => {
        //Tipo de usuario 1 = Cuidador, 2 = Cliente, 3 = Administrador
        //IdStatus 2= En proceso, 3= validado, 4=Rechazado
        this.tipousuario = response.usuario.tipoUsuarioid;

        if (response) {
          switch (this.tipousuario) {
            case 1:
              this.currentUser = {
                user: response.usuario,
                persona: response.personaFisica,
                role: 'cuidador',
              };
              localStorage.setItem(
                'currentUser',
                JSON.stringify(this.currentUser)
              );
              const datosMedicos = response.datosMedico;
              const persona = response.personaFisica;

              const objCuidador = {
                datosMedicos: datosMedicos,
                persona,
              };

              this.eventService.lanzarCuidador(objCuidador);

              console.log('Objeto Cuidador:', JSON.stringify(objCuidador));

              this.flag = true;
              break;
            case 2:
              this.currentUser = { user: response.usuario, role: 'cliente' };
              localStorage.setItem(
                'currentUser',
                JSON.stringify(this.currentUser)
              );

              this.flag = true;
              break;
            case 3:
              this.currentUser = { user: response.usuario, role: 'admin' };
              localStorage.setItem(
                'currentUser',
                JSON.stringify(this.currentUser)
              );
              this.flag = true;
              break;
          }
          //this.currentUser = { user: response.usuario, role: 'admin' };
          //localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
          //console.log('Llego aca');

          return this.flag;
        } else {
          return this.flag;
        }
      })
      .catch((error) => {
        console.error('Error during login', error);
        return false;
      });
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

  getCurrentUser(): any {
    return this.currentUser;
  }

  redirectUrl(): string {
    const role = this.getUserRole();
    console.log('Yo soy el rol', role);

    switch (role) {
      case 'admin':
        console.log('entre a admins');

        return '/administrador';
      case 'cuidador':
        return '/cuidador';
      case 'cliente':
        return '/familiar';
      default:
        console.log('entre a Login');

        return '/login';
    }
  }
}
