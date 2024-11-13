import { Component, NgModule, ViewChild } from '@angular/core';
import { estadosYMunicipios } from '../../interfaces/estadosMX';
import { EventServiceService } from '../../services/event-service.service';
import { ItDocumentacion } from '../../interfaces/documentacion';
import { ItPadecimiento } from '../../interfaces/padecimientos';
import { ItCertificacion } from '../../interfaces/certificaciones';
import { FileUploadComponent } from '../../global-components/file-upload/file-upload.component';
import { registroCuidador } from '../../interfaces/interfaces';
import { FormsRegisterService } from '../../services/forms-register.service';
import Swal from 'sweetalert2';
import {
  textInfoFoto,
  textINE,
  txtCeAntecedentes,
  txtVerAntecedentes,
  referenciasProfesionales,
  referenciasPersonales,
  datosPruebasDrogasAlcohol,
  datosCertificadoMedico,
} from '../../interfaces/locales';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  estados = Object.keys(estadosYMunicipios);
  municipios: string[] = [];
  selectedEstado: string = '';
  objDocuments: ItDocumentacion[] = [];
  alergia: string = '';
  alergias: string[] = [];
  captchaChecked: boolean = false;

  onCheckboxChange() {
    // Aquí puedes agregar lógica adicional si lo necesitas
  }
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
  docCertificacion: ItDocumentacion[] = [];
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
  fecha_nacimiento: Date = new Date();
  genero: string = '';
  estado_civil: string = '';
  rfc: string = '';
  curp: string = '';
  telefono_particular: string = '';
  telefono_movil: string = '';
  telefono_emergencia: string = '';
  fotoAvatar: ItDocumentacion | undefined;

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

  objDataDoc: ItDocumentacion | undefined = undefined;

  constructor(
    private eventServices: EventServiceService,
    private formsRegister: FormsRegisterService
  ) {}

  ngOnInit(): void {
    this.eventServices.getDownloadURL().subscribe(
      (data: ItDocumentacion) => {
        this.objDataDoc = data;
        if (this.objDataDoc.tipoDocumento === 'Información Profesional') {
          this.docCertificacion.push(this.objDataDoc);
          console.log('Hola Soy de certificaciones', this.docCertificacion);
        } else if (this.objDataDoc.nombreDocumento === 'Fotografía reciente') {
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
        nombre: this.nombrePadecimiento,
        descripcion: this.descPadecimiento,
        padeceDesde: this.fechaPadecimiento,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
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
        tipoCertificacion: this.tipoCertificacio,
        institucionEmisora: this.institucion,
        fechaCertificacion: this.fechaCertificacion,
        vigente: true,
        descripcion: this.descCertificacion,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
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
    if (true) {
      //Objeto de Información de residencia
      const residencia = {
        calle: this.calle,
        colonia: this.colonia,
        numeroInterior: this.numInterior,
        numeroExterior: this.numExterior,
        ciudad: this.municipio,
        estado: this.estado,
        pais: this.pais,
        referencias: this.referencias,
        estatusId: 2,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
      };
      const datosMedicos = {
        antecedentesMedicos: '',
        alergias: this.alergias.join(','),
        tipoSanguineo: this.tipoSanguineo,
        nombreMedicoFamiliar: this.nombreMedicoFam,
        telefonoMedicoFamiliar: this.numMedicoFam,
        observaciones: this.observaciones,
        usuarioRegistro: 0,
      };

      const padecimientos = this.objPadecimientos;

      const usuario = {
        usuarioNivelId: 6,
        tipoUsuarioId: 1,
        estatusId: 18,
        usuario: this.usuario,
        contrasenia: this.contrasenia,
        fechaRegistro: new Date(),
      };

      const persona = {
        nombre: this.nombre,
        apellidoPaterno: this.apellido_paterno,
        apellidoMaterno: this.apellido_materno,
        correoElectronico: this.correo_electronico,
        fechaNacimiento: this.fecha_nacimiento,
        genero: this.genero,
        estadoCivil: this.estado_civil,
        rfc: this.rfc,
        curp: this.curp,
        telefonoParticular: this.telefono_particular,
        telefonoMovil: this.telefono_movil,
        telefonoEmergencia: this.telefono_emergencia,
        nombreCompletoFamiliar: '',
        avatarImage: this.fotoAvatar?.urlDocumento,
        estatusId: 18,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
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
        certificacionesExperiencia: CertificacionesExperiencia,
      };

      this.formsRegister.registrarUsuarioWeb(this.objRegistrar).subscribe(
        (response) => {
          Swal.fire({
            title: '¡Operación exitosa!',
            text: 'Todo se completó correctamente.',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000, // La alerta desaparecerá automáticamente después de 2 segundos
            customClass: {
              icon: 'custom-icon-blue', // Clase personalizada para el icono
            },
          });
          console.log('Usuario registrado exitosamente', response);
        },
        (error) => {
          console.error('Error al registrar el usuario', error);
        }
      );

      alert(JSON.stringify(this.objRegistrar));
      console.log('Objeto Padre', this.objRegistrar);
    } else {
      console.log('Error');
    }
  }

  validarFormulario(): boolean {
    const campos = [
      { valor: this.nombre, nombre: 'Nombre' },
      { valor: this.apellido_paterno, nombre: 'Apellido Paterno' },
      { valor: this.apellido_materno, nombre: 'Apellido Materno' },
      { valor: this.correo_electronico, nombre: 'Correo Electrónico' },
      { valor: this.genero, nombre: 'Género' },
      { valor: this.estado_civil, nombre: 'Estado Civil' },
      { valor: this.rfc, nombre: 'RFC' },
      { valor: this.curp, nombre: 'CURP' },
      { valor: this.telefono_particular, nombre: 'Teléfono Particular' },
      { valor: this.telefono_movil, nombre: 'Teléfono Móvil' },
      { valor: this.telefono_emergencia, nombre: 'Teléfono de Emergencia' },
      { valor: this.pais, nombre: 'País' },
      { valor: this.estado, nombre: 'Estado' },
      { valor: this.municipio, nombre: 'Municipio' },
      { valor: this.colonia, nombre: 'Colonia' },
      { valor: this.calle, nombre: 'Calle' },
      { valor: this.numInterior, nombre: 'Número Interior' },
      { valor: this.numExterior, nombre: 'Número Exterior' },
      { valor: this.referencias, nombre: 'Referencias' },
      { valor: this.tipoSanguineo, nombre: 'Tipo Sanguíneo' },
      { valor: this.nombreMedicoFam, nombre: 'Nombre del Médico Familiar' },
      {
        valor: this.numMedicoFam,
        nombre: 'Número Telefónico del Médico Familiar',
      },
      { valor: this.observaciones, nombre: 'Observaciones' },
      { valor: this.usuario, nombre: 'Usuario' },
      { valor: this.contrasenia, nombre: 'Contraseña' },
    ];

    for (let campo of campos) {
      if (!campo.valor || campo.valor.trim() === '') {
        alert(`Por favor complete el campo: ${campo.nombre}`);
        return false;
      }
    }

    alert('Todos los campos están completos');
    return true;
  }

  textInfoFoto: string[] = textInfoFoto;

  textINE: string[] = textINE;

  txtCeAntecedentes: string[] = txtCeAntecedentes;

  txtVerAntecedentes: string[] = txtVerAntecedentes;

  referenciasProfesionales: string[] = referenciasProfesionales;

  referenciasPersonales: string[] = referenciasPersonales;

  datosCertificadoMedico: string[] = datosCertificadoMedico;

  datosPruebasDrogasAlcohol: string[] = datosPruebasDrogasAlcohol;
}
