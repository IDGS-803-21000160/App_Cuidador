import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environmentAPI } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItUsuario } from '../interfaces/usuario';
import { ItDomicilio } from '../interfaces/domicilio';
import { EventServiceService } from '../services/event-service.service';
import { Component, EventEmitter, Output } from '@angular/core';

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
  myEventMenu = new EventEmitter<Array<any>>();

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

  EventMenu(data: any[]): void {
    this.myEventMenu.emit(data);
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
        //TipoEstatus 1=Valudacion de documentos, 2=Proceso de contratacion, 3=disponibilidad, 4=capacitaciones
        this.tipousuario = response.usuario.tipoUsuarioid;
        this.EventMenu([
          {
            routerLink: ['/cuidador/profile'],
            svgViewBox: '0 0 24 24',
            svgFill: 'currentColor',
            svgPaths: [
              'M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z',
            ],
            text: 'Perfil',
            notification: false,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          },
        ]);
        console.log('Respueta del Login', response);

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

        return '/administrador';
    }
  }
}
