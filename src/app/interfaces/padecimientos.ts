export interface ItPadecimiento {
  id_padecimiento: number;
  datosmedicos_id: number;
  nombre: string;
  descripcion: string;
  padece_desde: Date;
  fecha_registro: Date;
  usuario_registro: number;
  fecha_modificacion: Date;
  usuario_modifico: number;
}
