export interface ItEstatus {
  idEstatus: number;
  tipoEstatusId: number;
  codigo: string;
  nombre: string;
  color: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
