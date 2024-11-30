import { SafeResourceUrl } from '@angular/platform-browser';

export interface ItDocumentacion {
  idDocumentacion?: number;
  personaId?: number;
  tipoDocumento: string;
  nombreDocumento: string;
  urlDocumento: string;
  fechaEmision?: string;
  fechaExpiracion?: string;
  version?: number;
  estatusId?: number;
  fechaRegistro?: string;
  usuarioRegistro?: number;
  fechaModificacion?: Date | undefined;
  usuarioModifico?: number | null;
  safeUrl?: SafeResourceUrl;
}
