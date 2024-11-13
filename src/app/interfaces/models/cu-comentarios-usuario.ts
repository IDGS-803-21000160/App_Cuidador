export interface ItComentariosUsuario {
  idComentarios: number;
  personaReceptorId: number;
  personaEmisorId: number;
  calificacion: number;
  comentario: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
