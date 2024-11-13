export interface ItSaldo {
  idSaldo: number;
  usuarioId: number;
  saldoActual: number;
  estatusId: number;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
