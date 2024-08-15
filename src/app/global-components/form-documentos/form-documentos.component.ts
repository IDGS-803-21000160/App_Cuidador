import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Modal, ModalOptions, ModalInterface } from 'flowbite';
import { EventServiceService } from '../../services/event-service.service';
import { Subscription } from 'rxjs';
import { ItDocumentacion } from '../../interfaces/documentacion';

@Component({
  selector: 'app-form-documentos',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  templateUrl: './form-documentos.component.html',
  styleUrls: ['./form-documentos.component.css'],
})
export class FormDocumentosComponent implements AfterViewInit, OnInit {
  eventoSubscription: Subscription | undefined;
  documentos: ItDocumentacion[] | undefined = [];
  backgroundStyle = 'linear-gradient(to right, #ffffff, #f0f0f0)';

  @ViewChild('modalElement', { static: true }) modalElement!: ElementRef;

  private modals: { [key: string]: ModalInterface } = {};

  constructor(
    private eventoServ: EventServiceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.eventoSubscription = this.eventoServ
      .obtenerDocumentos()
      .subscribe((data) => {
        console.log('La Data en Data', data);
        this.documentos = data?.map((documento) => {
          documento.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            documento.urlDocumento
          );
          return documento;
        });
      });
  }

  ngAfterViewInit() {
    this.documentos?.forEach((documento) => {
      const modalOptions: ModalOptions = {
        placement: 'center',
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

      const modalElement = document.getElementById(
        `extralarge-modal-${documento.idDocumentacion}`
      );
      if (modalElement) {
        if (documento.idDocumentacion !== undefined) {
          this.modals[documento.idDocumentacion] = new Modal(
            modalElement,
            modalOptions
          );
        } else {
          console.error('documento.idDocumentacion is undefined');
        }
      }
    });
  }

  openModal(documento: any) {
    this.modals[documento.idDocumentacion].show();
  }

  closeModal(documento: any) {
    this.modals[documento.idDocumentacion].hide();
  }

  updateStatus(documento: any, status: number) {
    let div = document.getElementById(
      `verifi${documento.idDocumentacion}`
    ) as HTMLElement;
    documento.estatus_id = status;

    if (status === 2) {
      div.style.background = 'rgb(76,180,58)';
      div.style.background =
        'linear-gradient(90deg, rgba(76,180,58,1) 0%, rgba(244,244,244,1) 50%, rgba(255,255,255,1) 100%)';
    } else if (status === 1) {
      div.style.background = 'rgb(255,0,0)';
      div.style.background =
        'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(244,244,244,1) 50%, rgba(255,255,255,1) 100%)';
    }
    console.log(
      `Documento ${documento.idDocumentacion} actualizado a estado ${status}`
    );

    console.log(div);
  }

  comentar(documento: any) {
    // Lógica para comentar el documento
    console.log('Comentar documento:', documento);
  }

  //Función para guardar los documentos

  guardarDocumentos() {
    console.log('Documentos Guardados', this.documentos);
  }
}
