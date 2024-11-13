export interface ItCuentaBancaria {
  idCuentaBancaria: number;
  usuarioId: number;
  numeroCuenta: number;
  clabeInterbancaria: number;
  nombreBanco: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
