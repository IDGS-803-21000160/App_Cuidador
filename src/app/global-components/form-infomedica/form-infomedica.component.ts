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
    idDatosmedicos: 0,
    antecedentesMedicos: '',
    alergias: '',
    tipoSanguineo: '',
    nombreMedicoFamiliar: '',
    telefonoMedicoFamiliar: '',
    observaciones: '',
    fechaRegistro: new Date(),
    usuarioRegistro: 0,
    fechaModificacion: new Date(),
    usuarioModifico: 0,
  };

  objPadecimiento: ItPadecimiento[] = [
    {
      idPadecimiento: 0,
      datosMedicosId: 0,
      nombre: '',
      descripcion: '',
      padeceDesde: new Date(),
      fechaRegistro: new Date(),
      usuarioRegistro: 0,
      fechaModificacion: new Date(),
      usuarioModifico: 0,
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
