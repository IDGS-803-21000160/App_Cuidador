import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminUsersService } from '../../../../services/admin-users.service';
import { ItAllUsers } from '../../../../interfaces/interfaces';

@Component({
  selector: 'app-admin-solicitudes',
  templateUrl: './admin-solicitudes.component.html',
  styleUrl: './admin-solicitudes.component.css',
})
export class AdminSolicitudesComponent {
  user: any = null;

  allUsers: ItAllUsers[] = [];
  cuidadores: ItAllUsers[] = [];

  constructor(private servicesUsers: AdminUsersService) {
    servicesUsers.getAllUsers().subscribe(
      (data) => {
        this.allUsers = data;
        this.allUsers.map((user) => {
          if (
            user.usuario.tipoUsuarioId === 1 &&
            user.usuario.estatusId === 2
          ) {
            this.cuidadores.push(user);
          } else {
          }
        });
        console.log('Yo cuidadores', this.cuidadores);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  userItems = [
    {
      routerLink: '/administrador/solicitudes/profile',
      users: this.cuidadores,
    },
  ];
}
