export interface ItTipoUsuario {
  idTipoUsuario: number;
  nombreTipo: string;
  fechaRegistro: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
