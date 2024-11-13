export interface ItMetodoPagoUsuario {
  idMetodoUsuario: number;
  usuarioId: number;
  nombreBeneficiario: string;
  numeroTarjeta: string;
  fechaVencimiento?: Date;
  ccv: string;
  vecesUsada: number;
  usuarioRegistro?: number;
  fechaRegistro?: Date;
  usuarioModifico?: number;
  fechaModifico?: Date;
}
