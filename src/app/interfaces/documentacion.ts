export interface Documentacion {
  id_documentacion: number;
  persona_id: number;
  tipo_documento: string;
  nombre_documento: string;
  url_documento: string;
  fecha_emision: number;
  fecha_expiracion: number;
  version: number;
  estatus_id: number;
  fecha_registro: number;
  usuario_registro: number;
  fecha_modificacion: number;
  usuario_modifico: number;
}
