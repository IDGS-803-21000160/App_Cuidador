export interface ItTransaccionSaldo {
  idTransaccionSaldo: number;
  saldoId: number;
  conceptoTransaccion: string;
  metodoPagoId: number;
  tipoMovimiento: string;
  fechaTransaccion: Date;
  importeTransaccion: number;
  saldoActual: number;
  saldoAnterior: number;
  fechaRegistro: Date;
  usuarioRegistro: number;
  fechaModificacion: Date;
  usuarioModifico: number;
}
