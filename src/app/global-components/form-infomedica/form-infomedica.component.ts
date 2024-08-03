import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ItDatosMedicos } from '../../interfaces/datos_medicos';
import { ItPadecimiento } from '../../interfaces/padecimientos';
import { EventServiceService } from '../../services/event-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-infomedica',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-infomedica.component.html',
  styleUrl: './form-infomedica.component.css',
})
export class FormInfomedicaComponent implements OnInit, OnDestroy {
  eventoSubscriptionDatosMedicos: Subscription | undefined;
  eventoSubscriptionPadeci: Subscription | undefined;

  datosMedicos: ItDatosMedicos | undefined;
  padecimientos: ItPadecimiento[] | undefined;
  listaAlergias: string[] = [];

  objtDatosMedicos: ItDatosMedicos = {
    id_datosmedicos: 0,
    antecedentes_medicos: '',
    alergias: '',
    tipo_sanguineo: '',
    nombre_medicofamiliar: '',
    telefono_medicofamiliar: '',
    observaciones: '',
    fecha_registro: new Date(),
    usuario_registro: 0,
    fecha_modificacion: new Date(),
    usuario_modifico: 0,
  };

  objPadecimiento: ItPadecimiento[] = [
    {
      id_padecimiento: 0,
      datosmedicos_id: 0,
      nombre: '',
      descripcion: '',
      padece_desde: new Date(),
      fecha_registro: new Date(),
      usuario_registro: 0,
      fecha_modificacion: new Date(),
      usuario_modifico: 0,
    },
  ];

  constructor(private service: EventServiceService) {}

  ngOnInit(): void {
    this.eventoSubscriptionDatosMedicos = this.service
      .obtenerDatosMedicos()
      .subscribe((data) => {
        this.datosMedicos = data;
        if (this.datosMedicos) {
          this.objtDatosMedicos = { ...this.datosMedicos };
        }
        console.log('Recibí Datos medicos', this.datosMedicos);
        this.listaAlergias = this.objtDatosMedicos.alergias.split(',');
      });
    this.eventoSubscriptionPadeci = this.service
      .obtenerPadecimientos()
      .subscribe((data) => {
        this.padecimientos = data;
        if (this.padecimientos) {
          this.objPadecimiento = { ...this.padecimientos };
        }
        console.log('padecimientos', this.objPadecimiento);
      });
  }

  ngOnDestroy(): void {
    if (this.eventoSubscriptionDatosMedicos) {
      this.eventoSubscriptionDatosMedicos.unsubscribe();
    }
  }
}
