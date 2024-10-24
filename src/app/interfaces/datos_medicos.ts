export interface ItDatosMedicos {
  idDatosmedicos?: number;
  antecedentesMedicos: string;
  alergias: string;
  tipoSanguineo: string;
  nombreMedicoFamiliar: string;
  telefonoMedicoFamiliar: string;
  observaciones: string;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
