export interface ItSalarioCuidador {
  idSueldoNivel: number;
  usuarioId: number;
  precioPorHora: number;
  fechaRegistro: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
  concurrencia?: number;
  diaSemana?: string;
  horaInicio?: string;
  horaFin?: string;
  estatusId?: number;
}
