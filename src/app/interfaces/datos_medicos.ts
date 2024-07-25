export interface ItDatosMedicos {
  id_datosmedicos: number;
  antecedentes_medicos: string;
  alergias: string;
  tipo_sanguineo: string;
  nombre_medicofamiliar: string;
  telefono_medicofamiliar: string;
  observaciones: string;
  fecha_registro: Date;
  usuario_registro: number;
  fecha_modificacion: Date;
  usuario_modifico: number;
}
