import { Component } from '@angular/core';
import { estadosYMunicipios } from '../../../interfaces/estadosMX';
import { EventServiceService } from '../../../services/event-service.service';
import { ItDocumentacion } from '../../../interfaces/documentacion';
import { ItPadecimiento } from '../../../interfaces/padecimientos';
import { FileUploadComponent } from '../../../global-components/file-upload/file-upload.component';
import {
  textInfoFoto,
  textINE,
  txtCeAntecedentes,
  txtVerAntecedentes,
  referenciasProfesionales,
  referenciasPersonales,
  datosPruebasDrogasAlcohol,
  datosCertificadoMedico,
} from '../../../interfaces/locales';
import { registroFamiliar } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  //Locales
  textInfoFotoFam: string[] = textInfoFoto;
  textINEFam: string[] = textINE;
  txtCeAntecedentesFam: string[] = txtCeAntecedentes;
  txtVerAntecedentesFam: string[] = txtVerAntecedentes;
  referenciasProfesionalesFam: string[] = referenciasProfesionales;
  referenciasPersonalesFam: string[] = referenciasPersonales;
  datosPruebasDrogasAlcoholFam: string[] = datosPruebasDrogasAlcohol;
  datosCertificadoMedicoFam: string[] = datosCertificadoMedico;

  estados = Object.keys(estadosYMunicipios);
  municipios: string[] = [];
  selectedEstado: string = '';
  objDocuments: ItDocumentacion[] = [];
  alergia: string = '';
  alergias: string[] = [];

  //Propiedades para Padecimientos Fam
  objPadecimientos: ItPadecimiento[] = [];
  nombrePadecimientoFam: string = '';
  descPadecimientoFam: string = '';
  fechaPadecimientoFam: Date = new Date();

  //Propiedades Domicilio Fam
  paisFam: string = '';
  estadoFam: string = '';
  municipioFam: string = '';
  coloniaFam: string = '';
  calleFam: string = '';
  numInteriorFam: string = '';
  numExteriorFam: string = '';
  referenciasFam: string = '';

  //Propiedades  Datos Médicos Fam
  tipoSanguineoFam: string = '';
  nombreMedicoFamFam: string = '';
  numMedicoFamFam: string = '';
  alergiasFormatFam: string = this.alergias.join(',');
  observacionesFam: string = '';

  //Propiedades Usuario Fam
  usuarioFam: string = '';
  contraseniaFam: string = '';

  //Propiedades Persona Fam
  nombreFam: string = '';
  apellido_paternoFam: string = '';
  apellido_maternoFam: string = '';
  correo_electronicoFam: string = '';
  fecha_nacimientoFam: Date = new Date();
  generoFam: string = '';
  estado_civilFam: string = '';
  rfcFam: string = '';
  curpFam: string = '';
  telefono_particularFam: string = '';
  telefono_movilFam: string = '';
  telefono_emergenciaFam: string = '';
  fotoAvatarFam: ItDocumentacion | undefined;

  constructor(private eventServices: EventServiceService) {}
  objDataDoc: ItDocumentacion | null = null;

  onEstadoChangeFam(event: Event) {
    const target = event.target as HTMLSelectElement;
    const estado = target.value;
    if (estado in estadosYMunicipios) {
      this.selectedEstado = estado;
      this.municipios = estadosYMunicipios[estado];
    } else {
      this.municipios = [];
    }
  }

  ngOnInit(): void {
    this.eventServices.getDownloadURL().subscribe(
      (data: ItDocumentacion) => {
        this.objDataDoc = data;
        if (this.objDataDoc.nombreDocumento === 'Fotografía reciente') {
          this.fotoAvatarFam = this.objDataDoc;
          console.log('Avatar', this.fotoAvatarFam);
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
  agregarAlergiaFam() {
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

  registrarFamiliar() {
    const objFamiliar: registroFamiliar = {
      domicilio: {
        calle: this.calleFam,
        colonia: this.coloniaFam,
        numeroInterior: this.numInteriorFam,
        numeroExterior: this.numExteriorFam,
        ciudad: this.municipioFam,
        estado: this.estadoFam,
        pais: this.paisFam,
        referencias: this.referenciasFam,
        estatusId: 2,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
      },
      padecimientos: this.objPadecimientos,

      datos_medicos: {
        antecedentesMedicos: '',
        alergias: this.alergiasFormatFam,
        tipoSanguineo: this.tipoSanguineoFam,
        nombreMedicoFamiliar: this.nombreMedicoFamFam,
        telefonoMedicoFamiliar: this.numMedicoFamFam,
        observaciones: this.observacionesFam,
        fechaRegistro: new Date(),
        usuarioRegistro: 0,
      },
      usuario: {
        tipoUsuarioId: 2,
        estatusId: 2,
        usuario: this.usuarioFam,
        contrasenia: this.contraseniaFam,
        fechaRegistro: new Date(),
      },
      persona: {
        nombre: this.nombreFam,
        apellidoPaterno: this.apellido_paternoFam,
        apellidoMaterno: this.apellido_maternoFam,
        correoElectronico: this.correo_electronicoFam,
        fechaNacimiento: this.fecha_nacimientoFam,
        genero: this.generoFam,
        estadoCivil: this.estado_civilFam,
        rfc: this.rfcFam,
        curp: this.curpFam,
        telefonoParticular: this.telefono_particularFam,
        telefonoMovil: this.telefono_movilFam,
        telefonoEmergencia: this.telefono_emergenciaFam,
        avatarImage: this.fotoAvatarFam?.urlDocumento,
        usuarioRegistro: 0,
        esFamiliar: 1,
      },
      documentacion: this.objDocuments,
    };
    alert(JSON.stringify(objFamiliar));
    console.log('Registro Familiar:', objFamiliar);
  }
}
