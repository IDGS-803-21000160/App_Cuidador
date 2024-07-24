import { Documentacion } from './documentacion';

export interface ItCertificacionExperiencia {
  id_certificacion?: number;
  tipo_certificacion: string;
  institucion_emisora: string;
  fecha_certificacion: Date;
  vigente: boolean;
  descripcion: string;
  fecha_registro: Date;
  usuario_registro: number;
  fecha_modificacion: Date;
  usuario_modifico: number;
  persona_id?: number;
  documento_id?: number;
}

export interface ItCertificacion {
  certificacion: ItCertificacionExperiencia;
  documento: Documentacion;
}

export interface ItCertificaciones {
  certificaciones: ItCertificacion[];
}
