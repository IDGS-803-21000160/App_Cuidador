export interface ItContrato {
  idContrato: number;
  personaIdCuidador: number;
  personaIdCliente: number;
  estatusId: number;
  usuarioRegistro?: number;
  fechaRegistro?: Date;
  usuarioModifico?: number;
  fechaModifico?: Date;
}
