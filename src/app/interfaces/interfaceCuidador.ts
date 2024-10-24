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

export interface CertificacionExperiencia {
  certificacion: Certificacion;
  documento: Documentacion;
}

export interface RootObject {
  datosMedicos: DatosMedicos;
  persona: Persona;
}

export interface RootObjectCuidadores {
  domicilio: Domicilio;
  datosMedicos: DatosMedicos;
  padecimientos: Padecimiento[] | null;
  usuario: Usuario;
  persona: Persona;
  documentacion: Documentacion[];
  certificacionesExperiencia: CertificacionExperiencia[];
}

//Get de los cuidadores:
// Interface para Domicilio
export interface ItCuidadoresDomicilio {
  id_domicilio: number;
  calle: string;
  colonia: string;
  numero_interior: string;
  numero_exterior: string;
  ciudad: string;
  estado: string;
  pais: string;
  referencias: string;
  estatus_id: number;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface para Datos Médicos
export interface ItCuidadoresDatosMedicos {
  id_datosmedicos: number;
  antecedentes_medicos?: string | null;
  alergias?: string | null;
  tipo_sanguineo?: string | null;
  nombre_medicofamiliar?: string | null;
  telefono_medicofamiliar?: string | null;
  observaciones?: string | null;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface para Usuario
export interface ItCuidadoresUsuario {
  id_usuario: number;
  usuarionivel_id: number;
  tipo_usuarioid: number;
  estatusid: number;
  usuario: string;
  contrasenia: string;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface para Persona
export interface ItCuidadoresPersona {
  id_persona: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  fecha_nacimiento: string;
  genero: string;
  estado_Civil: string;
  rfc: string;
  curp: string;
  telefono_particular?: string;
  telefono_movil?: string;
  telefono_emergencia: string;
  nombrecompleto_familiar: string;
  domicilio_id: number;
  datos_medicosid?: number | null;
  usuario_id: number;
  avatar_image: string;
  estatus_id: number;
  esFamiliar?: boolean | null;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface para Documentación
export interface ItCuidadoresDocumentacion {
  id_documentacion: number;
  persona_id: number;
  tipo_documento: string;
  nombre_documento: string;
  url_documento: string;
  fecha_emision: string;
  fecha_expiracion: string;
  version: number;
  estatus_id: number;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface para Certificación y Experiencia
export interface ItCuidadoresCertificacionExpDTO {
  id_certificacion: number;
  tipo_certificacion: string;
  institucion_emisora: string;
  fecha_certificacion: string;
  vigente: boolean;
  experienciaAnios: number;
  descripcion: string;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
  persona_id: number;
  documento_id?: number | null;
}

// Interface para Certificación y Experiencia Documentación
export interface ItCuidadoresCertificacionExpDocumentacionDTO {
  certificacionExpDTO: ItCuidadoresCertificacionExpDTO;
  documentacionDTO: ItCuidadoresDocumentacion;
}

// Interface general que agrupa todo
// Interface para Padecimiento
export interface ItCuidadoresPadecimiento {
  id_padecimiento: number;
  datosmedicos_id: number;
  nombre: string;
  descripcion: string;
  padeceDesde: string;
  fecha_registro: string;
  usuario_registro: number;
  fecha_modificacion?: string | null;
  usuario_modifico?: number | null;
}

// Interface general que agrupa todo
export interface ItCuidadores {
  domicilio: ItCuidadoresDomicilio;
  datosMedicos: ItCuidadoresDatosMedicos;
  padecimientos: ItCuidadoresPadecimiento[];
  usuario: ItCuidadoresUsuario;
  persona: ItCuidadoresPersona;
  documentacion: ItCuidadoresDocumentacion[];
  certificacionesExperiencia: ItCuidadoresCertificacionExpDocumentacionDTO[];
}
