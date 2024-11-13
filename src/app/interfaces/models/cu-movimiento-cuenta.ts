export interface ItMovimientoCuenta {
  idMovimientoCuenta: number;
  cuentaBancariaId: number;
  conceptoMovimiento: string;
  metodoPagoId: number;
  tipoMovimiento: string;
  numeroSeguimientoBanco: number;
  fechaMovimiento?: Date;
  importeMovimiento: number;
  saldoActual: number;
  saldoAnterior: number;
}
