import { SafeResourceUrl } from '@angular/platform-browser';

export interface Documentacion {
  id_documentacion: number;
  persona_id: number;
  tipo_documento: string;
  nombre_documento: string;
  url_documento: string;
  fecha_emision: string;
  fecha_expiracion: string;
  version: number;
  estatus_id: number;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion: string;
  usuario_modifico: number;
  safeUrl?: SafeResourceUrl;
}
