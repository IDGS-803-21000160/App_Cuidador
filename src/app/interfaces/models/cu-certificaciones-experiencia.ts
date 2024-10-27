export interface ItCertificacionesExperiencia {
  idCertificacion: number;
  tipoCertificacion: string;
  institucionEmisora: string;
  fechaCertificacion?: Date;
  vigente: boolean;
  experienciaAnios?: number;
  descripcion: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
  personaId: number;
  documentoId: number;
}
