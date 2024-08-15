import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventServiceService } from '../../../../services/event-service.service';
import { ItAllUsers } from '../../../../interfaces/interfaces';
import { ItPersonaFisica } from '../../../../interfaces/personaFisica';
import { ItDatosMedicos } from '../../../../interfaces/datos_medicos';
import { ItPadecimiento } from '../../../../interfaces/padecimientos';
import { ItDocumentacion } from '../../../../interfaces/documentacion';

@Component({
  selector: 'app-admin-tabs',
  templateUrl: './admin-tabs.component.html',
  styleUrls: ['./admin-tabs.component.css'],
})
export class AdminTabsComponent implements OnInit, OnDestroy {
  user: any = null;
  eventoSubscription: Subscription | undefined;
  datosUsuario: ItAllUsers | null = null;
  imgPerfil: string | undefined = '';
  nameCuidador: string | undefined = '';
  userName: string | undefined = '';
  infopersona: ItPersonaFisica | undefined;
  infoDatosMedicos: ItDatosMedicos | undefined;
  infoPadecimientos: ItPadecimiento[] | undefined = [];
  infoDocs: ItDocumentacion[] | undefined = [];
  showFirstDiv = true;

  constructor(private router: Router, private eventoServ: EventServiceService) {
    console.log('Mu pa Constr');
  }

  ngOnInit(): void {
    console.log('OnLogggggg');
    setTimeout(() => {
      this.eventoSubscription = this.eventoServ
        .recibirUsuario()
        .subscribe((data) => {
          if (data) {
            this.datosUsuario = data;
            this.imgPerfil = this.datosUsuario.persona.avatarImage;
            this.nameCuidador =
              this.datosUsuario.persona.nombre +
              ' ' +
              this.datosUsuario.persona.apellidoPaterno;
            this.userName = '@' + this.datosUsuario.usuario.usuario;
            this.infopersona = this.datosUsuario.persona;
            this.infoDatosMedicos = this.datosUsuario.datos_medicos;
            this.infoPadecimientos = this.datosUsuario.padecimientos;
            this.infoDocs = this.datosUsuario.documentacion;
            console.log('Se mandó la data', this.infoDocs);
            this.eventoServ.lanzarPersona(this.infopersona); // Emitir los datos al servicio
            this.eventoServ.lanzarDatosMedicos(this.infoDatosMedicos);
            this.eventoServ.lanzarPadecimientos(this.infoPadecimientos);
            this.eventoServ.lanzarDocumentos(this.infoDocs);
          }
        });
      this.showFirstDiv = false;
    }, 5000);
  }

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnDestroy(): void {
    if (this.eventoSubscription) {
      this.eventoSubscription.unsubscribe();
    }
  }
}
