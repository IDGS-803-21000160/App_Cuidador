export interface ItDocumentation {
  idDocumentacion: number;
  personaId: number;
  tipoDocumento?: string;
  nombreDocumento: string;
  urlDocumento: string;
  fechaEmision?: Date;
  fechaExpiracion?: Date;
  version?: number;
  estatusId?: number;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
