import { Component, Input, OnInit } from '@angular/core';
import { RequestsService } from '../../../../../services/service-request/requests.service';

@Component({
  selector: 'app-list-applications',
  templateUrl: './list-applications.component.html',
  styleUrls: ['./list-applications.component.css'],
})
export class ListApplicationsComponent implements OnInit {
  solicitudes: Array<any> = [];

  constructor(private requestsService: RequestsService) {}

  ngOnInit(): void {
    this.requestsService.getAllRequests().subscribe((data: any) => {
      this.solicitudes = data.map((solicitud: any) => ({
        idFeedback: solicitud.idFeedback,
        nombreUsuario: solicitud.usuarioIdRemitenteNavigation.usuario1,
        categoria: solicitud.categoria,
        cuerpo: solicitud.cuerpo,
        fecha: solicitud.fecha,
        estatus: solicitud.estatus.nombre,
        color: solicitud.estatus.color,
      }));
    });
  }
}
