export interface ItPadecimiento {
  idPadecimiento?: number;
  datosMedicosId?: number;
  nombre: string;
  descripcion: string;
  padeceDesde: Date;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
