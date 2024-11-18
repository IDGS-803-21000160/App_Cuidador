import { Component, NgModule, ViewChild } from '@angular/core';
import { estadosYMunicipios } from '../../../../interfaces/estadosMX';
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
} from '../../../../interfaces/locales';
import { ItDocumentacion } from '../../../../interfaces/documentacion';
import { EventServiceService } from '../../../../services/event-service.service';
import { FormsRegisterService } from '../../../../services/forms-register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  fotoAvatar: ItDocumentacion | undefined;

  //Locales
  textInfoFoto: string[] = textInfoFoto;
  textINE: string[] = textINE;
  txtCeAntecedentes: string[] = txtCeAntecedentes;
  txtVerAntecedentes: string[] = txtVerAntecedentes;
  referenciasProfesionales: string[] = referenciasProfesionales;
  referenciasPersonales: string[] = referenciasPersonales;
  datosPruebasDrogasAlcohol: string[] = datosPruebasDrogasAlcohol;
  datosCertificadoMedico: string[] = datosCertificadoMedico;

  //Info Personal
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

  //Domicilio
  pais: string = '';
  estado: string = '';
  municipio: string = '';
  colonia: string = '';
  calle: string = '';
  numInterior: string = '';
  numExterior: string = '';
  referencias: string = '';

  //Info Medica y de Salud
  tipoSanguineo: string = '';
  nombreMedicoFam: string = '';
  numMedicoFam: string = '';
  alergia: string = '';
  alergias: string[] = [];
  objPadecimientos: any[] = [];
  nombrePadecimientoFam: string = '';
  descPadecimientoFam: string = '';
  fechaPadecimientoFam: Date = new Date();
  observaciones: string = '';

  //Info User
  usuario: string = '';
  contrasenia: string = '';

  estados = Object.keys(estadosYMunicipios);
  selectedEstado: string = '';
  municipios: string[] = [];

  constructor(
    private eventServices: EventServiceService,
    private formsRegister: FormsRegisterService
  ) {}

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
    if (this.nombrePadecimientoFam || this.descPadecimientoFam) {
      const newPadecimiento = {
        nombre: this.nombrePadecimientoFam,
        descripcion: this.descPadecimientoFam,
        padeceDesde: this.fechaPadecimientoFam,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
      };

      this.objPadecimientos.push(newPadecimiento);
      this.nombrePadecimientoFam = '';
      this.descPadecimientoFam = '';
    }

    console.log(this.objPadecimientos);
  }

  eliminarPadecimiento(elemento: number) {
    this.objPadecimientos.splice(elemento, 1);
  }

  objDataDoc: ItDocumentacion | undefined = undefined;
  objDocuments: ItDocumentacion[] = [];

  ngOnInit(): void {
    this.eventServices.getDownloadURL().subscribe(
      (data: ItDocumentacion) => {
        this.objDataDoc = data;
        if (this.objDataDoc.nombreDocumento === 'Fotografía reciente') {
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
        tipoUsuarioId: 2,
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

      const reg = {
        domicilio: residencia,
        datos_medicos: datosMedicos,
        padecimientos: padecimientos,
        usuario: usuario,
        persona: persona,
        documentacion: documentacion,
      };

      alert(JSON.stringify(reg));
      console.log('Objeto Padre', reg);
    } else {
      console.log('Error');
    }
  }
}
