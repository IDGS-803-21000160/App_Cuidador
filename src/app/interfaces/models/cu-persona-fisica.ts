export interface ItPersonaFisica {
  idPersona?: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correoElectronico: string;
  fechaNacimiento?: Date;
  genero: string;
  estadoCivil: string;
  rfc: string;
  curp: string;
  telefonoParticular: string;
  telefonoMovil: string;
  telefonoEmergencia: string;
  nombreCompletoFamiliar?: string;
  domicilioId?: number;
  datosMedicosId?: number;
  fechaRegistro?: Date;
  usuarioRegistro: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
  usuarioId?: number;
  avatarImage?: string;
  estatusId?: number;
  esFamiliar?: number;
}
