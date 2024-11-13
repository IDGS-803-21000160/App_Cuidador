import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../../../../../services/event-service.service';
import {
  DatosMedicos,
  Documentacion,
  Padecimiento,
  Persona,
} from '../../../../../interfaces/interfaceCuidador';
import { ItPersonaFisica } from '../../../../../interfaces/personaFisica';
import { ItDatosMedicos } from '../../../../../interfaces/datos_medicos';
import { ItPadecimiento } from '../../../../../interfaces/padecimientos';
import { ItDocumentacion } from '../../../../../interfaces/documentacion';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'app-cuidador-tabs',
  templateUrl: './cuidador-tabs.component.html',
  styleUrl: './cuidador-tabs.component.css',
})
export class CuidadorTabsComponent implements OnInit {
  fotoProfile: string = '';
  currentUser: any;
  constructor(
    private eventService: EventServiceService,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.getCurrentUser();
  }

  ngOnInit() {
    // Suscribirse al observable al inicializar el componente
    this.eventService.recibirCuidador().subscribe(
      (cuidador) => {
        console.log('Cuidador recibido:', cuidador);
        if (cuidador && cuidador.persona && cuidador.persona.avatarImage) {
          this.fotoProfile = cuidador.persona.avatarImage;
          const perosna = this.mapPersonaToPropsPersona(cuidador.persona);
          const datosMedicos = this.mapDatosMedicos(cuidador.datosMedicos);
          const padecimientos = this.mapPadecimientoToPadecimiento(
            cuidador.datosMedicos.padecimientos
          );
          const documentacion = this.mapDocumentacion(
            cuidador.persona.documentacions
          );

          this.eventService.lanzarPersona(perosna);
          this.eventService.lanzarDatosMedicos(datosMedicos);
          this.eventService.lanzarPadecimientos(padecimientos);
          this.eventService.lanzarDocumentos(documentacion);
        } else {
          console.warn('El objeto Cuidador no tiene la propiedad avatarImage');
        }
        console.log('Foto:', this.fotoProfile);
      },
      (error) => {
        console.error('Error al recibir el cuidador:', error);
      }
    );
  }
  mapPersonaToPropsPersona(persona: Persona): ItPersonaFisica {
    return {
      apellidoMaterno: persona.apellidoMaterno,
      apellidoPaterno: persona.apellidoPaterno,
      avatarImage: persona.avatarImage,
      correoElectronico: persona.correoElectronico,
      curp: persona.curp,
      datosMedicosId: persona.datosMedicosid,
      domicilioId: persona.domicilioId,
      estadoCivil: persona.estadoCivil,
      estatusId: persona.estatusId,
      fechaModificacion: persona.fechaModificacion
        ? new Date(persona.fechaModificacion)
        : new Date(),
      fechaNacimiento: new Date(persona.fechaNacimiento),
      fechaRegistro: new Date(persona.fechaRegistro),
      genero: persona.genero,
      idPersona: persona.idPersona,
      nombre: persona.nombre,
      nombreCompletoFamiliar: persona.nombrecompletoFamiliar,
      rfc: persona.rfc,
      telefonoEmergencia: persona.telefonoEmergencia,
      telefonoMovil: persona.telefonoMovil,
      telefonoParticular: persona.telefonoParticular,
      usuarioId: persona.usuarioId,
      usuarioModifico: persona.usuarioModifico || 0,
      usuarioRegistro: persona.usuarioRegistro,
    };
  }
  mapDatosMedicos(datos_medicos: DatosMedicos): ItDatosMedicos {
    return {
      idDatosmedicos: datos_medicos.idDatosmedicos,
      antecedentesMedicos: datos_medicos.antecedentesMedicos,
      alergias: datos_medicos.alergias,
      tipoSanguineo: datos_medicos.tipoSanguineo,
      nombreMedicoFamiliar: datos_medicos.nombreMedicofamiliar,
      telefonoMedicoFamiliar: datos_medicos.telefonoMedicofamiliar,
      observaciones: datos_medicos.observaciones,
      fechaRegistro: new Date(datos_medicos.fechaRegistro),
      usuarioRegistro: datos_medicos.usuarioRegistro,
      fechaModificacion: datos_medicos.fechaModificacion
        ? new Date(datos_medicos.fechaModificacion)
        : new Date(),
      usuarioModifico: datos_medicos.usuarioModifico || 0,
    };
  }
  mapPadecimientoToPadecimiento(
    padecimientos: Padecimiento[]
  ): ItPadecimiento[] {
    return padecimientos.map((padecimiento) => ({
      idPadecimiento: padecimiento.idPadecimiento,
      datosMedicosId: padecimiento.datosmedicosId,
      descripcion: padecimiento.descripcion,
      fechaModificacion: padecimiento.fechaModificacion
        ? new Date(padecimiento.fechaModificacion)
        : new Date(),
      fechaRegistro: new Date(padecimiento.fechaRegistro),
      nombre: padecimiento.nombre,
      padeceDesde: padecimiento.padeceDesde
        ? new Date(padecimiento.padeceDesde)
        : new Date(),
      usuarioModifico: padecimiento.usuarioModifico || 0,
      usuarioRegistro: padecimiento.usuarioRegistro,
    }));
  }
  mapDocumentacion(documentacion: Documentacion[]): ItDocumentacion[] {
    return documentacion.map((doc) => ({
      estatusId: doc.estatusId,
      fechaEmision: doc.fechaEmision,
      fechaExpiracion: doc.fechaExpiracion,
      fechaModificacion: doc.fechaModificacion
        ? new Date(doc.fechaModificacion)
        : undefined,
      fechaRegistro: doc.fechaRegistro,
      idDocumentacion: doc.idDocumentacion,
      nombreDocumento: doc.nombreDocumento,
      personaId: doc.personaId,
      tipoDocumento: doc.tipoDocumento,
      urlDocumento: doc.urlDocumento,
      usuarioModifico: doc.usuarioModifico,
      usuarioRegistro: doc.usuarioRegistro,
      version: doc.version,
    }));
  }
}
