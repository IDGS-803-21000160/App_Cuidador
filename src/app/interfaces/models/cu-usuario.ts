export interface ItUsuario {
  idUsuario: number;
  usuarioNivelId: number;
  tipoUsuarioId: number;
  estatusId: number;
  usuario: string;
  contrasenia: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
