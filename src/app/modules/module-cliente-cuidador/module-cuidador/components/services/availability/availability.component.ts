import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { ServicesServicesService } from '../../../../../../services/services-cliente-cuidador/services-services/services-services.service';
import { TableModule } from 'primeng/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css',
})
export class AvailabilityComponent implements OnInit {
  horarios: any[] = [];
  isLoading = true;

  //Variables Reg Horario
  diaSemana: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  precioHora: number = 0;

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

  regHorarioCuidador() {
    const user = this.currentUser.getCurrentUser();
    if (this.diaSemana === 'SABADO') {
      this.diaSemana = 'SÁBADO';
    }

    const horario = {
      idUsuario: user.user.idUsuario,
      horarios: [
        {
          diaSemana: this.diaSemana,
          horaInicio: `${this.horaInicio}:00`,
          horaFin: `${this.horaFin}:00`,
          preciPorHora: this.precioHora,
        },
      ],
    };
    alert(JSON.stringify(horario));

    this.services.regHorarioCuidador(horario).subscribe((data) => {
      if (data) {
        console.log('Horario registrado:', data);
        Swal.fire({
          icon: 'success',
          title: 'Horario registrado',
          text: 'El horario ha sido registrado exitosamente',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al registrar el horario',
        });
      }
    });
  }
}
