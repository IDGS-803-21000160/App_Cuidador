export interface ItTarjetaUsuario {
  idTarjeta: number;
  usuarioId: number;
  beneficiario: string;
  numeroTarjeta: string;
  vencimiento: Date;
  ccv: string;
  banco: string;
  tipoTarjeta: string;
  concurrenciaUso: number;
}
