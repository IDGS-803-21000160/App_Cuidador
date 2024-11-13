export interface ItNotificacion {
  idNotificacion: number;
  personaIdNoti: number;
  rutaMenu: string;
  tituloNoti: string;
  descripcionNoti: string;
  estatusId?: number;
  usuarioRegistro?: number;
  fechaRegistro?: Date;
  usuarioModifico?: number;
  fechaModifico?: Date;
}
