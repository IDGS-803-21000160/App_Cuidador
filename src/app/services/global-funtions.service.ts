import { Injectable } from '@angular/core';
import {
  DatosMedicos,
  Documentacion,
  Padecimiento,
  Persona,
} from '../interfaces/interfaceCuidador';
import { ItPersonaFisica } from '../interfaces/personaFisica';
import { ItDatosMedicos } from '../interfaces/datos_medicos';
import { ItDocumentacion } from '../interfaces/documentacion';
import { ItPadecimiento } from '../interfaces/padecimientos';
import { getCuidadores, registroCuidador } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalFuntionsService {
  constructor() {}

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

  transformarArreglo(originalArray: any[]): getCuidadores[] {
    return originalArray.map((original) => ({
      domicilio: {
        idDomicilio: original.domicilio.IdDomicilio,
        calle: original.domicilio.Calle,
        colonia: original.domicilio.Colonia,
        numeroInterior: original.domicilio.NumeroInterior,
        numeroExterior: original.domicilio.NumeroExterior,
        ciudad: original.domicilio.Ciudad,
        estado: original.domicilio.Estado,
        pais: original.domicilio.Pais,
        referencias: original.domicilio.Referencias,
        estatusId: original.domicilio.EstatusId,
        fechaRegistro: new Date(original.domicilio.FechaRegistro),
        usuarioRegistro: original.domicilio.UsuarioRegistro,
        fechaModificacion: original.domicilio.FechaModificacion
          ? new Date(original.domicilio.FechaModificacion)
          : undefined,
        usuarioModifico: original.domicilio.UsuarioModifico,
      },
      datos_medicos: original.datosMedicos.map((dm: any) => ({
        idDatosmedicos: dm.IdDatosmedicos,
        antecedentesMedicos: dm.AntecedentesMedicos,
        alergias: dm.Alergias,
        tipoSanguineo: dm.TipoSanguineo,
        nombreMedicoFamiliar: dm.NombreMedicofamiliar,
        telefonoMedicoFamiliar: dm.TelefonoMedicofamiliar,
        observaciones: dm.Observaciones,
        fechaRegistro: new Date(dm.FechaRegistro),
        usuarioRegistro: dm.UsuarioRegistro,
        fechaModificacion: dm.FechaModificacion
          ? new Date(dm.FechaModificacion)
          : undefined,
        usuarioModifico: dm.UsuarioModifico,
      })),
      padecimientos: original.padecimientos.map((padecimiento: any) => ({
        idPadecimiento: padecimiento.IdPadecimiento,
        datosMedicosId: padecimiento.DatosmedicosId,
        nombre: padecimiento.Nombre,
        descripcion: padecimiento.Descripcion,
        padeceDesde: new Date(padecimiento.PadeceDesde),
        fechaRegistro: new Date(padecimiento.FechaRegistro),
        usuarioRegistro: padecimiento.UsuarioRegistro,
        fechaModificacion: padecimiento.FechaModificacion
          ? new Date(padecimiento.FechaModificacion)
          : undefined,
        usuarioModifico: padecimiento.UsuarioModifico,
      })),
      usuario: {
        id_usuario: original.IdUsuario,
        usuarioNivelId: original.UsuarionivelId,
        tipoUsuarioId: original.TipoUsuarioid,
        estatusId: original.Estatusid,
        usuario: original.Usuario1,
        contrasenia: original.Contrasenia,
        fechaRegistro: new Date(original.FechaRegistro),
        usuarioRegistro: original.UsuarioRegistro,
        fechaModificacion: original.FechaModificacion
          ? new Date(original.FechaModificacion)
          : undefined,
        usuarioModifico: original.UsuarioModifico,
      },
      persona: original.personas
        ? {
            idPersona: original.personas.IdPersona,
            usuarioId: original.personas.UsuarioId,
            nombre: original.personas.Nombre,
            apellidoPaterno: original.personas.ApellidoPaterno,
            apellidoMaterno: original.personas.ApellidoMaterno,
            correoElectronico: original.personas.CorreoElectronico,
            fechaNacimiento: new Date(original.personas.FechaNacimiento),
            genero: original.personas.Genero,
            estadoCivil: original.personas.EstadoCivil,
            rfc: original.personas.Rfc,
            curp: original.personas.Curp,
            telefonoParticular: original.personas.TelefonoParticular,
            telefonoMovil: original.personas.TelefonoMovil,
            telefonoEmergencia: original.personas.TelefonoEmergencia,
            nombreCompletoFamiliar: original.personas.NombrecompletoFamiliar,
            domicilioId: original.personas.DomicilioId,
            datosMedicosId: original.personas.DatosMedicosid,
            avatarImage: original.personas.AvatarImage,
            estatusId: original.personas.EstatusId,
            fechaRegistro: new Date(original.personas.FechaRegistro),
            usuarioRegistro: original.personas.UsuarioRegistro,
            fechaModificacion: original.personas.FechaModificacion
              ? new Date(original.personas.FechaModificacion)
              : undefined,
            usuarioModifico: original.personas.UsuarioModifico,
            esFamiliar: undefined, // No asignar null explícitamente, permitir undefined
          }
        : null, // Si personas no está presente, persona será null
      documentacion: original.documentacion.map((doc: any) => ({
        idDocumentacion: doc.IdDocumentacion,
        personaId: doc.PersonaId,
        tipoDocumento: doc.TipoDocumento,
        nombreDocumento: doc.NombreDocumento,
        urlDocumento: doc.UrlDocumento,
        fechaEmision: doc.FechaEmision,
        fechaExpiracion: doc.FechaExpiracion,
        version: doc.Version,
        estatusId: doc.EstatusId,
        fechaRegistro: doc.FechaRegistro,
        usuarioRegistro: doc.UsuarioRegistro,
        fechaModificacion: doc.FechaModificacion
          ? new Date(doc.FechaModificacion)
          : undefined,
        usuarioModifico: doc.UsuarioModifico,
        safeUrl: undefined, // Si tienes el valor adecuado para safeUrl, lo puedes asignar
      })),
      certificacionesExperiencia: original.certificaciones.map((cert: any) => ({
        idCertificacion: cert.IdCertificacion,
        tipoCertificacion: cert.TipoCertificacion,
        institucionEmisora: cert.InstitucionEmisora,
        fechaCertificacion: new Date(cert.FechaCertificacion),
        vigente: cert.Vigente,
        descripcion: cert.Descripcion,
        fechaRegistro: new Date(cert.FechaRegistro),
        usuarioRegistro: cert.UsuarioRegistro,
        fechaModificacion: cert.FechaModificacion
          ? new Date(cert.FechaModificacion)
          : undefined,
        usuarioModifico: cert.UsuarioModifico,
        personaId: original.personas ? original.personas.IdPersona : undefined,
        documentoId: undefined, // Si tienes el valor adecuado para documentoId, lo puedes asignar
      })),
    }));
  }
}
