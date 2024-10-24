export interface ItPersonaFisica {
  idPersona?: number;
  usuarioId?: number;
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
  avatarImage?: string;
  estatusId?: number;
  fechaRegistro?: Date;
  usuarioRegistro: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
  esFamiliar?: number;
}
