import { Component } from '@angular/core';
import { estadosYMunicipios } from '../../interfaces/estadosMX';
import { EventServiceService } from '../../services/event-service.service';
import { Documentacion } from '../../interfaces/documentacion';
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
        this.objDocuments.push(data);
        console.log('Received Documentacion:', this.objDataDoc);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
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
}
