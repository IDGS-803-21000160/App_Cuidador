import { ItDocumentacion } from './documentacion';

export interface ItCertificacionExperiencia {
  idCertificacion?: number;
  tipoCertificacion: string;
  institucionEmisora: string;
  fechaCertificacion: Date;
  vigente: boolean;
  descripcion: string;
  fechaRegistro: Date;
  usuarioRegistro: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
  personaId?: number;
  documentoId?: number;
}

export interface ItCertificacion {
  certificacion: ItCertificacionExperiencia;
  documento: ItDocumentacion;
}

export interface ItCertificaciones {
  certificaciones: ItCertificacion[];
}
