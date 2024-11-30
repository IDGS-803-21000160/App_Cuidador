import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import {
  textInfoFoto,
  textINE,
  txtCeAntecedentes,
  txtVerAntecedentes,
  referenciasProfesionales,
  referenciasPersonales,
  datosPruebasDrogasAlcohol,
  datosCertificadoMedico,
} from '../../../../../interfaces/locales';
import { estadosYMunicipios } from '../../../../../interfaces/estadosMX';
import { ItDocumentacion } from '../../../../../interfaces/documentacion';
import { FamiliarServicesService } from '../../../../../services/services-cliente-familiar/familiar-services.service';
import { EventServiceService } from '../../../../../services/event-service.service';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'app-fam-adulto',
  templateUrl: './fam-adulto.component.html',
  styleUrls: ['./fam-adulto.component.css'],
})
export class FamAdultoComponent implements AfterViewInit, OnInit {
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

  private modal: ModalInterface | undefined;
  userItems: any = [];
  currentStep = 1;

  constructor(
    private eventServices: EventServiceService,
    private familiarServices: FamiliarServicesService,
    private currentUser: AuthService
  ) {}

  ngAfterViewInit(): void {
    const $modalElement: HTMLElement | null =
      document.querySelector('#extralarge-modal');

    if ($modalElement) {
      const modalOptions: ModalOptions = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: true,
        onHide: () => {
          console.log('modal is hidden');
        },
        onShow: () => {
          console.log('modal is shown');
        },
        onToggle: () => {
          console.log('modal has been toggled');
        },
      };

      this.modal = new Modal($modalElement, modalOptions);
    }
  }

  openModal() {
    this.modal?.show();
  }

  closeModal() {
    this.modal?.hide();
  }
  nextStep() {
    this.currentStep++;
  }
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  getStepClass(step: number): string {
    return this.currentStep === step
      ? 'text-blue-600 dark:text-blue-500'
      : 'text-gray-500 dark:text-gray-400';
  }

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

  registroAdultoMAyor() {
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
        usuarioRegistro: 0,
      };
      const datosMedicos = {
        antecedentesMedicos: '',
        alergias: this.alergias.join(','),
        tipoSanguineo: this.tipoSanguineo,
        nombreMedicoFamiliar: this.nombreMedicoFam,
        telefonoMedicoFamiliar: this.numMedicoFam,
        observaciones: this.observaciones,
      };

      const padecimientos = this.objPadecimientos;

      const persona = {
        nombre: this.nombre,
        apellidoPaterno: this.apellido_paterno,
        apellidoMaterno: this.apellido_materno,
        fechaNacimiento: this.fecha_nacimiento,
        genero: this.genero,
        estadoCivil: this.estado_civil,
        rfc: this.rfc,
        curp: this.curp,
        telefonoEmergencia: this.telefono_emergencia,
        avatarImage: this.fotoAvatar?.urlDocumento,
        estatusId: 18,
        usuarioId: this.currentUser.getCurrentUser().user.idUsuario,
        esFamiliar: 0,
      };

      const documentacion = this.objDocuments;

      const reg = {
        domicilio: residencia,
        datos_medicos: datosMedicos,
        padecimientos: padecimientos,
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
