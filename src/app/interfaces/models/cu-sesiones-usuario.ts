export interface ItSesionesUsuario {
  idSesion: number;
  usuarioId: number;
  ultimoInicioSesion: Date;
  ultimoCambioContrasenia: Date;
  ipSesion?: number;
  nombreEquipo?: string;
  sistemaOperativo?: string;
  isSesionActiva?: boolean;
}
