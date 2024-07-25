export interface ItPersonaFisica {
  id_persona: number;
  usuario_id: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  fecha_nacimiento: Date;
  genero: string;
  estado_civil: string;
  rfc: string;
  curp: string;
  telefono_particular: string;
  telefono_movil: string;
  telefono_emergencia: string;
  nombrecompleto_familiar: string;
  domicilio_id: number;
  datos_medicosid: number;
  avatar_image?: string;
  estatus_id: number;
  fecha_registro: Date;
  usuario_registro: number;
  fecha_modificacion: Date;
  usuario_modifico: number;
}
