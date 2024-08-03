import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItPersonaFisica } from '../../interfaces/personaFisica';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-form-infopersonal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-infopersonal.component.html',
  styleUrls: ['./form-infopersonal.component.css'],
})
export class FormInfopersonalComponent implements OnInit, OnDestroy {
  eventoSubscription: Subscription | undefined;
  persona: ItPersonaFisica | undefined;

  propsPersona: ItPersonaFisica = {
    apellido_materno: '',
    apellido_paterno: '',
    avatar_image: '',
    correo_electronico: '',
    curp: '',
    datos_medicosid: 0,
    domicilio_id: 0,
    estado_civil: '',
    estatus_id: 0,
    fecha_modificacion: '',
    fecha_nacimiento: '',
    fecha_registro: '',
    genero: '',
    id_persona: 0,
    nombre: '',
    nombrecompleto_familiar: '',
    rfc: '',
    telefono_emergencia: '',
    telefono_movil: '',
    telefono_particular: '',
    usuario_id: 0,
    usuario_modifico: 0,
    usuario_registro: 0,
  };

  constructor(private service: EventServiceService) {}

  ngOnInit(): void {
    this.eventoSubscription = this.service
      .obtenerPersona()
      .subscribe((data) => {
        this.persona = data;
        if (this.persona) {
          this.propsPersona = { ...this.persona };
        }
        console.log('Recibí esto', this.propsPersona);
      });
  }

  ngOnDestroy(): void {
    if (this.eventoSubscription) {
      this.eventoSubscription.unsubscribe();
    }
  }

  hola() {
    console.log(this.propsPersona);
  }
}
