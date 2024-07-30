import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../../../../services/event-service.service';
import { Subscription } from 'rxjs';
import { ItAllUsers } from '../../../../interfaces/interfaces';
import { ItPersonaFisica } from '../../../../interfaces/personaFisica';

@Component({
  selector: 'app-admin-tabs',
  templateUrl: './admin-tabs.component.html',
  styleUrl: './admin-tabs.component.css',
})
export class AdminTabsComponent implements OnInit {
  user: any = null; // Inicializar user como null
  eventoSubscription: Subscription | undefined;
  datosUsuario: ItAllUsers | undefined;
  imgPerfil: string | undefined = '';
  infopersona: ItPersonaFisica | undefined;

  constructor(
    private router: Router,
    private eventoServ: EventServiceService
  ) {}

  ngOnInit(): void {
    this.eventoServ.recibirUsuario().subscribe((data) => {
      this.datosUsuario = data;
      this.imgPerfil = this.datosUsuario?.persona.avatar_image;
      this.infopersona = this.datosUsuario?.persona;
      this.eventoServ.lanzarPersona(this.infopersona);
      console.log('Lo recivo', this.imgPerfil);
    });
  }
}
