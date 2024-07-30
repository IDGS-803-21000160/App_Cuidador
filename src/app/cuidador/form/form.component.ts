import { Component, NgModule, ViewChild } from '@angular/core';
import { estadosYMunicipios } from '../../interfaces/estadosMX';
import { EventServiceService } from '../../services/event-service.service';
import { Documentacion } from '../../interfaces/documentacion';
import { ItPadecimiento } from '../../interfaces/padecimientos';
import { ItCertificacion } from '../../interfaces/certificaciones';
import { FileUploadComponent } from '../../global-components/file-upload/file-upload.component';
import { registroCuidador } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  estados = Object.keys(estadosYMunicipios);
  municipios: string[] = [];
  selectedEstado: string = '';
  objDocuments: Documentacion[] = [];
  alergia: string = '';
  alergias: string[] = [];

  //Propiedades para Padecimientos
  objPadecimientos: ItPadecimiento[] = [];
  nombrePadecimiento: string = '';
  descPadecimiento: string = '';
  fechaPadecimiento: Date = new Date();

  //Propiedades para Certificaciones
  tipoCertificacio: string = '';
  institucion: string = '';
  fechaCertificacion: Date = new Date();
  descCertificacion: string = '';
  docCertificacion: Documentacion[] = [];
  certificaciones: ItCertificacion[] = [];

  //Propiedades Domicilio
  pais: string = '';
  estado: string = '';
  municipio: string = '';
  colonia: string = '';
  calle: string = '';
  numInterior: string = '';
  numExterior: string = '';
  referencias: string = '';

  //Propiedades  Datos Médicos
  tipoSanguineo: string = '';
  nombreMedicoFam: string = '';
  numMedicoFam: string = '';
  alergiasFormat: string = this.alergias.join(',');
  observaciones: string = '';

  //Propiedades Usuario
  usuario: string = '';
  contrasenia: string = '';

  //Propiedades Persona
  nombre: string = '';
  apellido_paterno: string = '';
  apellido_materno: string = '';
  correo_electronico: string = '';
  fecha_nacimiento: string = '';
  genero: string = '';
  estado_civil: string = '';
  rfc: string = '';
  curp: string = '';
  telefono_particular: string = '';
  telefono_movil: string = '';
  telefono_emergencia: string = '';
  fotoAvatar: Documentacion | undefined;

  //Objeto de registro
  objRegistrar: registroCuidador | undefined;

  @ViewChild('fileUploadCertificacion')
  fileUploadCertificacion!: FileUploadComponent;

  onEstadoChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const estado = target.value;
    if (estado in estadosYMunicipios) {
      this.selectedEstado = estado;
      this.municipios = estadosYMunicipios[estado];
    } else {
      this.municipios = [];
    }
  }

  objDataDoc: Documentacion | null = null;

  constructor(private eventServices: EventServiceService) {}

  ngOnInit(): void {
    this.eventServices.getDownloadURL().subscribe(
      (data: Documentacion) => {
        this.objDataDoc = data;
        if (this.objDataDoc.tipo_documento === 'Información Profesional') {
          this.docCertificacion.push(this.objDataDoc);
          console.log('Hola Soy de certificaciones', this.docCertificacion);
        } else if (this.objDataDoc.nombre_documento === 'Fotografía reciente') {
          this.fotoAvatar = this.objDataDoc;
          console.log('Avatar', this.fotoAvatar);
        } else {
          this.objDocuments.push(data);
          console.log('Received Documentacion:', this.objDocuments);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  //Funciones para agregar la alergia:
  agregarAlergia() {
    if (this.alergia) {
      this.alergias.push(this.alergia);
      this.alergia = '';
    }
    console.log(this.alergias);
  }

  eliminarAlergia(elemento: number) {
    this.alergias.splice(elemento, 1);
  }

  //Funcionea para agregar padecimiento
  agregarPadecimiento() {
    if (this.nombrePadecimiento || this.descPadecimiento) {
      const newPadecimiento = {
        id_padecimiento: 0,
        datosmedicos_id: 0,
        nombre: this.nombrePadecimiento,
        descripcion: this.descPadecimiento,
        padece_desde: this.fechaPadecimiento,
        fecha_registro: new Date(),
        usuario_registro: 0,
        fecha_modificacion: new Date(),
        usuario_modifico: 0,
      };

      this.objPadecimientos.push(newPadecimiento);
      this.nombrePadecimiento = '';
      this.descPadecimiento = '';
    }

    console.log(this.objPadecimientos);
  }

  eliminarPadecimiento(elemento: number) {
    this.objPadecimientos.splice(elemento, 1);
  }

  //Funciones para agregar Certificaciones
  agregarCertificacion() {
    if (this.tipoCertificacio && this.institucion && this.descCertificacion) {
      const newCertificacion = {
        id_certificacion: 0,
        tipo_certificacion: this.tipoCertificacio,
        institucion_emisora: this.institucion,
        fecha_certificacion: this.fechaCertificacion,
        vigente: true,
        descripcion: this.descCertificacion,
        fecha_registro: new Date(),
        usuario_registro: 0,
        fecha_modificacion: new Date(),
        usuario_modifico: 0,
        persona_id: 0,
        documento_id: 0,
      };

      const certificacion = {
        certificacion: newCertificacion,
        documento: this.docCertificacion[0],
      };

      this.certificaciones.push(certificacion);
      this.tipoCertificacio = '';
      this.institucion = '';
      this.descCertificacion = '';
      this.limpiarCampos();
      this.docCertificacion = [];
    }
    console.log(this.certificaciones);
  }

  limpiarCampos(): void {
    const dateInput = <HTMLInputElement>(
      document.getElementById('fechaCertificacion')
    );
    if (dateInput) {
      dateInput.value = '';
    }
    if (this.fileUploadCertificacion) {
      this.fileUploadCertificacion.resetFileInput();
    }
  }

  quitarCertificacion(elemento: number) {
    this.certificaciones.splice(elemento, 1);
    console.log(this.certificaciones);
  }

  registroCuidador() {
    //Objeto de Información de residencia
    const residencia = {
      id_domicilio: 0,
      calle: this.calle,
      colonia: this.colonia,
      numero_interior: this.numInterior,
      numero_exterior: this.numExterior,
      ciudad: this.municipio,
      estado: this.estado,
      pais: this.pais,
      referencias: this.referencias,
      estatus_id: 5,
      fecha_registro: new Date(),
      usuario_registro: 0,
      fecha_modificacion: new Date(),
      usuario_modifico: 0,
    };
    const datosMedicos = {
      id_datosmedicos: 0,
      antecedentes_medicos: '',
      alergias: this.alergias.join(','),
      tipo_sanguineo: this.tipoSanguineo,
      nombre_medicofamiliar: this.nombreMedicoFam,
      telefono_medicofamiliar: this.numMedicoFam,
      observaciones: this.observaciones,
      fecha_registro: new Date(),
      usuario_registro: 0,
      fecha_modificacion: new Date(),
      usuario_modifico: 0,
    };

    const padecimientos = this.objPadecimientos;

    const usuario = {
      id_usuario: 0,
      usuarionivel_id: 6,
      tipo_usuarioid: 1,
      estatusid: 5,
      usuario: this.usuario,
      contrasenia: this.contrasenia,
      fecha_registro: new Date(),
      usuario_registro: 0,
      fecha_modificacion: new Date(),
      usuario_modifico: 0,
    };

    const persona = {
      id_persona: 0,
      usuario_id: 0,
      nombre: this.nombre,
      apellido_paterno: this.apellido_paterno,
      apellido_materno: this.apellido_materno,
      correo_electronico: this.correo_electronico,
      fecha_nacimiento: this.fecha_nacimiento,
      genero: this.genero,
      estado_civil: this.estado_civil,
      rfc: this.rfc,
      curp: this.curp,
      telefono_particular: this.telefono_particular,
      telefono_movil: this.telefono_movil,
      telefono_emergencia: this.telefono_emergencia,
      nombrecompleto_familiar: '',
      domicilio_id: 0,
      datos_medicosid: 0,
      avatar_image: this.fotoAvatar?.url_documento,
      estatus_id: 5,
      fecha_registro: new Date().toISOString(),
      usuario_registro: 0,
      fecha_modificacion: new Date().toISOString(),
      usuario_modifico: 0,
    };

    const documentacion = this.objDocuments;

    const CertificacionesExperiencia = {
      certificaciones: this.certificaciones,
    };

    this.objRegistrar = {
      domicilio: residencia,
      datos_medicos: datosMedicos,
      padecimientos: padecimientos,
      usuario: usuario,
      persona: persona,
      documentacion: documentacion,
      certificaciones: CertificacionesExperiencia,
    };

    console.log('Objeto Padre', this.objRegistrar);
  }

  textInfoFoto: string[] = [
    'Tamaño: Normalmente, 2 pulgadas x 2 pulgadas (5 cm x 5 cm) o similar.',
    'Fondo: Fondo blanco o de color claro uniforme.',
    'Iluminación: Luz suave y uniforme para evitar sombras en el rostro.',
    'Posición: Debe ser frontal y centrada, mirando directamente a la cámara.',
    'Expresión facial: Neutral, con una ligera sonrisa.',
    'Ropa: Preferiblemente ropa formal o neutra.',
    'Orientación: Vertical.',
    'Calidad: Alta resolución, nítida y sin borrones.',
    'Formato: Formato JPG o PNG.',
  ];

  textINE: string[] = [
    'Fotografías Requeridas:',
    'Anverso: Parte frontal de la identificación.',
    'Reverso: Parte trasera de la identificación.',
    '',
    'Calidad de la Fotografía: Alta resolución y en color.',
    '',
    'Iluminación y Claridad: Área bien iluminada y visible.',
    '',
    'Composición: Sobre superficie plana y neutra.',
    '',
    'Formato de Archivo:',
    'JPG, PNG o PDF.',
    'Tamaño máximo: 5 MB por archivo.',
  ];

  txtCeAntecedentes: string[] = [
    'Documento oficial emitido por una autoridad gubernamental (generalmente el Ministerio de Justicia o equivalente) que certifica la existencia o inexistencia de antecedentes penales en el registro de una persona.',
    'Formato de Archivo: PDF',
  ];

  txtVerAntecedentes: string[] = [
    'Permiso otorgado por una persona para que un tercero (generalmente un empleador, institución educativa o agencia de investigación) realice una verificación de sus antecedentes personales.',
    'Formato de Archivo: PDF',
  ];

  referenciasProfesionales: string[] = [
    'Número de Referencias: Proporciona al menos dos referencias profesionales.',
    '',
    'Formato: Incluye la siguiente información para cada referencia profesional:',
    '',
    'Nombre Completo',
    'Título o Cargo',
    'Empresa u Organización',
    'Relación Laboral: Describe tu relación laboral con esta persona (e.g., supervisor, colega, subordinado).',
    'Tiempo de Conocimiento: Indica cuánto tiempo has trabajado o interactuado profesionalmente con esta persona.',
    '',
    'Datos de Contacto:',
    'Teléfono',
    'Correo Electrónico',
    'Dirección ',
    '',
    'Comentarios: Una breve declaración de la persona referenciadora sobre tu desempeño y habilidades profesionales',
  ];

  referenciasPersonales: string[] = [
    'Número de Referencias: Proporciona al menos dos referencias personales.',
    '',
    'Formato: Incluye la siguiente información para cada referencia personal:',
    '',
    'Nombre Completo',
    'Relación: Describe brevemente tu relación con esta persona (e.g., amigo, vecino, colega).',
    'Tiempo de Conocimiento: Indica cuánto tiempo conoces a esta persona.',
    '',
    'Datos de Contacto:',
    'Teléfono',
    'Correo Electrónico',
    'Dirección ',
    '',
    'Comentarios: Una breve declaración de la persona referenciadora sobre tu carácter y habilidades',
    'Formato de Archivo: PDF',
  ];

  datosCertificadoMedico: string[] = [
    '* Datos del Paciente:',
    '-Nombre completo, -Fecha de nacimiento etc.',
    '',
    '* Datos del Médico:',
    '-Nombre completo, -Número de cédula médica, -Especialidad, -Dirección del consultorio, -Número de contacto',
    '',
    '* Exámenes Realizados:',
    '-Historia clínica, -Examen físico general (peso, altura, presión arterial, etc.)',
    '-Evaluación de sistemas principales (cardiovascular, respiratorio, etc.), -Exámenes de laboratorio (sangre, orina, etc.)',
    '-Pruebas adicionales (electrocardiograma, radiografía, etc.)',
    '',
    '* Declaración de Salud:',
    '- Donde el paciente no presenta enfermedades contagiosas ni restricciones médicas.',
    '',
    '* Fecha de Emisión:',
    '- Fecha de examen y emisión del certificado.',
    '',
    '* Firma y Sello del Médico:',
    '-Firma del médico y Sello del consultorio',
    '',
    '* Observaciones Adicionales:',
    '-Observaciones relevantes del médico.',
    'Formato de Archivo: PDF',
  ];

  datosPruebasDrogasAlcohol: string[] = [
    '* Datos del Paciente:',
    '(1)Nombre completo (2)Fecha de nacimiento',
    '',
    '* Datos del Proveedor de la Prueba:',
    '(1)Nombre completo (2)Número de cédula médica o certificación (3)Especialidad (4)Dirección del laboratorio o clínica (5)Número de contacto',
    '',
    '* Detalles de la Prueba:',
    '(1)Tipo de prueba (orina, sangre, saliva, cabello, etc.) (2)Sustancias analizadas (alcohol, THC, opioides, cocaína, etc.) (3)Fecha y hora de la recolección de la muestra',
    '',
    '* Resultados de la Prueba:',
    '(1)Resultado para cada sustancia (negativo, positivo, niveles específicos, etc.) (2)Observaciones del técnico o médico que realizó la prueba',
    '',
    '* Declaración de Resultados:',
    '(1)Declaración que indique si el paciente está libre de drogas y alcohol según los resultados obtenidos.',
    '',
    '* Fecha de Emisión:',
    '(1)Fecha en la que se emitió el documento de resultados.',
    '',
    '* Firma y Sello del Proveedor de la Prueba:',
    '(1)Firma del técnico o médico responsable (2)Sello del laboratorio o clínica',
    '',
    '* Observaciones Adicionales:',
    '(1)Cualquier observación relevante que el técnico o médico considere importante.',
    'Formato de Archivo: PDF',
  ];
}
