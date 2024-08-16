import { ItCertificaciones } from './certificaciones';
import { ItDatosMedicos } from './datos_medicos';
import { ItDocumentacion } from './documentacion';
import { ItDomicilio } from './domicilio';
import { ItPadecimiento } from './padecimientos';
import { ItPersonaFisica } from './personaFisica';
import { ItUsuario } from './usuario';

export interface BodyStep {
  step: string;
  statusStep: boolean;
}

export interface registroCuidador {
  domicilio: ItDomicilio;
  datos_medicos: ItDatosMedicos;
  padecimientos: ItPadecimiento[];
  usuario: ItUsuario;
  persona: ItPersonaFisica;
  documentacion: ItDocumentacion[];
  certificacionesExperiencia: ItCertificaciones;
}

export interface getCuidadores {
  domicilio: ItDomicilio;
  datos_medicos: ItDatosMedicos;
  padecimientos: ItPadecimiento[];
  usuario: ItUsuario;
  persona: ItPersonaFisica | null;
  documentacion: ItDocumentacion[];
  certificacionesExperiencia: ItCertificaciones;
}

export interface registroFamiliar {
  domicilio: ItDomicilio;
  datos_medicos: ItDatosMedicos;
  padecimientos: ItPadecimiento[];
  usuario: ItUsuario;
  persona: ItPersonaFisica;
  documentacion: ItDocumentacion[];
}

export interface ItAllUsers {
  domicilio: ItDomicilio;
  datos_medicos: ItDatosMedicos;
  padecimientos: ItPadecimiento[];
  usuario: ItUsuario;
  persona: ItPersonaFisica;
  documentacion: ItDocumentacion[];
  certificacionesExperiencia?: ItCertificaciones;
}
