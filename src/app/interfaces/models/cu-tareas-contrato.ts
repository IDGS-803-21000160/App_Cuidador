export interface ItTareasContrato {
  idTareas: number;
  contratoItemId: number;
  tituloTarea: string;
  descripcionTarea: string;
  tipoTarea: string;
  estatusId: number;
  fechaARealizar?: Date;
  fechaInicio?: Date;
  fechaFinalizacion?: Date;
  fechaPospuesta?: Date;
}
