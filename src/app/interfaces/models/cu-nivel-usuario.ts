export interface ItNivelUsuario {
  idNivelUsuario: number;
  nombreNivel: string;
  vigenciaHasta: Date;
  colorNivel: string;
  imagenUrlNivel: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
