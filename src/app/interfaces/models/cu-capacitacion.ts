export interface ItCapacitation {
  idCapacitacion: number;
  nombreCapacitacion: string;
  descripcion: string;
  urlDocumento: string;
  estatusId: number;
  calificacionMaxima: number;
  calificacionAprov: number;
  fechaExpiracion: Date;
  fechaInicio?: Date;
  usuarioRegistro?: number;
  fechaRegistro?: Date;
  usuarioModifico?: number;
  fechaModifico?: Date;
}
