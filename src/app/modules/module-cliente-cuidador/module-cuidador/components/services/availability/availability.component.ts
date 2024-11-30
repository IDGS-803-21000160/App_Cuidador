import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { ServicesServicesService } from '../../../../../../services/services-cliente-cuidador/services-services/services-services.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css',
})
export class AvailabilityComponent implements OnInit {
  horarios: any[] = [];
  isLoading = true;

  constructor(
    private currentUser: AuthService,
    private services: ServicesServicesService
  ) {}

  ngOnInit() {
    console.log('Hola a todes', this.currentUser.getCurrentUser());
    const user = this.currentUser.getCurrentUser();
    this.services.getHorariosCuidador(user.user.idUsuario).subscribe((data) => {
      if (data) {
        this.horarios = data;
        console.log('Horarios:', this.horarios);
        console.log('Dias disponibles:', this.validarDiasDisponibles());
        this.isLoading = false;
      } else {
        console.log('No hay horarios');
        this.isLoading = true;
      }
    });
  }

  validarDiasDisponibles() {
    const diasOcupados = this.horarios.map((horario) => horario.diaSemana);
    const diasSemana = [
      'LUNES',
      'MARTES',
      'MIERCOLES',
      'JUEVES',
      'VIERNES',
      'SABADO',
      'DOMINGO',
    ];
    return diasSemana.filter((dia) => !diasOcupados.includes(dia));
  }
}
