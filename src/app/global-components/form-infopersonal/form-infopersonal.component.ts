import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItPersonaFisica } from '../../interfaces/personaFisica';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EventServiceService } from '../../services/event-service.service';
import { Persona } from '../../interfaces/interfaceCuidador';
import { ItDomicilio } from '../../interfaces/domicilio';

@Component({
  selector: 'app-form-infopersonal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-infopersonal.component.html',
  styleUrls: ['./form-infopersonal.component.css'],
})
export class FormInfopersonalComponent implements OnInit, OnDestroy {
  eventoSubscription: Subscription | undefined;
  eventoSubscription2: Subscription | undefined;
  persona: ItPersonaFisica | undefined;
  domicilio: ItDomicilio | undefined;

  propsPersona: ItPersonaFisica = {
    apellidoMaterno: '',
    apellidoPaterno: '',
    avatarImage: '',
    correoElectronico: '',
    curp: '',
    datosMedicosId: 0,
    domicilioId: 0,
    estadoCivil: '',
    estatusId: 0,
    fechaModificacion: new Date(),
    fechaNacimiento: new Date(),
    fechaRegistro: new Date(),
    genero: '',
    idPersona: 0,
    nombre: '',
    nombreCompletoFamiliar: '',
    rfc: '',
    telefonoEmergencia: '',
    telefonoMovil: '',
    telefonoParticular: '',
    usuarioId: 0,
    usuarioModifico: 0,
    usuarioRegistro: 0,
  };

  proposDomicilio: ItDomicilio = {
    calle: '',
    ciudad: '',
    colonia: '',
    estado: '',
    referencias: '',
    idDomicilio: 0,
    numeroExterior: '',
    numeroInterior: '',
    pais: '',
    usuarioModifico: 0,
    usuarioRegistro: 0,
    estatusId: 0,
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

    this.eventoSubscription2 = this.service
      .obtenerResidencia()
      .subscribe((data) => {
        this.domicilio = data;
        if (this.domicilio) {
          this.proposDomicilio = { ...this.domicilio };
        }
        console.log('Recibí Domicilio desde Form Persona', this.domicilio);
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
