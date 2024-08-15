export interface DatosMedicos {
  idDatosmedicos: number;
  antecedentesMedicos: string;
  alergias: string;
  tipoSanguineo: string;
  nombreMedicofamiliar: string;
  telefonoMedicofamiliar: string;
  observaciones: string;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  padecimientos: Padecimiento[];
}

export interface Padecimiento {
  idPadecimiento: number;
  datosmedicosId: number;
  nombre: string;
  descripcion: string;
  padeceDesde: string;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
}

export interface Persona {
  idPersona: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  correoElectronico: string;
  fechaNacimiento: string;
  genero: string;
  estadoCivil: string;
  rfc: string;
  curp: string;
  telefonoParticular: string;
  telefonoMovil: string;
  telefonoEmergencia: string;
  nombrecompletoFamiliar: string;
  domicilioId: number;
  datosMedicosid: number;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  usuarioId: number;
  avatarImage: string;
  estatusId: number;
  esFamiliar: boolean | null;
  certificacionesExperiencia: Certificacion[];
  comentariosUsuarioPersonaEmisors: any[];
  comentariosUsuarioPersonaReceptors: any[];
  documentacions: Documentacion[];
  domicilio?: Domicilio;
  estatus: any;
  usuario?: Usuario;
}

export interface Certificacion {
  idCertificacion: number;
  tipoCertificacion: string;
  institucionEmisora: string;
  fechaCertificacion: string;
  vigente: boolean;
  experienciaAnios: number;
  descripcion: string;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  personaId: number;
  documentoId: number;
}

export interface Documentacion {
  idDocumentacion: number;
  personaId: number;
  tipoDocumento: string;
  nombreDocumento: string;
  urlDocumento: string;
  fechaEmision: string;
  fechaExpiracion: string;
  version: number;
  estatusId: number;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  certificacionesExperiencia?: Certificacion[];
  estatus: any;
}

export interface Domicilio {
  idDomicilio: number;
  calle: string;
  colonia: string;
  numeroInterior: string;
  numeroExterior: string;
  ciudad: string;
  estado: string;
  pais: string;
  referencias: string;
  estatusId: number;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  estatus: any;
  personaMorals: any[];
}

export interface Usuario {
  idUsuario: number;
  usuarionivelId: number;
  tipoUsuarioid: number;
  estatusid: number;
  usuario1: string;
  contrasenia: string;
  fechaRegistro: string;
  usuarioRegistro: number;
  fechaModificacion: string | null;
  usuarioModifico: number | null;
  capacitacionUsuarios: any[];
  cuentaBancaria: any[];
  estatus: any;
  metodoPagoUsuarios: any[];
  salarioCuidadors: any[];
  saldos: any[];
  sesionesUsuarios: any[];
  tarjetaUsuarios: any[];
  tipoUsuario: any;
  usuarionivel: any;
  versionesMovils: any[];
}

export interface RootObject {
  datos_medicos: DatosMedicos;
  persona: Persona;
}
