import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-global-list-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './global-list-user.component.html',
  styleUrl: './global-list-user.component.css',
})
export class GlobalListUserComponent implements OnInit {
  @Input() ItemsUser: Array<any> = [];

  usuarioSeleccionado: any = null;

  constructor(private router: Router, private service: EventServiceService) {}
  ngOnInit(): void {
    console.log('ItemsUser', this.ItemsUser);
  }

  selectUser(router: any, user: any) {
    this.usuarioSeleccionado = user;
    console.log('hola ', this.usuarioSeleccionado);

    this.service.lanzarUsuario(user);
  }

  trackByIndex(index: number, user: any): number {
    return index;
  }
}
