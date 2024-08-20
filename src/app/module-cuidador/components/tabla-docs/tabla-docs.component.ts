import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { EventServiceService } from '../../../services/event-service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Modal, ModalOptions, ModalInterface } from 'flowbite';
import { ItDocumentacion } from '../../../interfaces/documentacion';
import { AdminUsersService } from '../../../services/admin-users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla-docs',
  templateUrl: './tabla-docs.component.html',
  styleUrls: ['./tabla-docs.component.css'],
})
export class TablaDocsComponent implements AfterViewInit, OnInit {
  eventoSubscription: Subscription | undefined;
  documentos: ItDocumentacion[] | undefined = [];
  docsNoRechazados: ItDocumentacion[] = [];
  docsRechazados: ItDocumentacion[] = [];
  docsActualizados: ItDocumentacion[] = [];
  estatus: boolean = false;

  @ViewChild('modalElement', { static: true }) modalElement!: ElementRef;
  private modals: { [key: string]: ModalInterface } = {};

  constructor(
    private eventoServ: EventServiceService,
    private sanitizer: DomSanitizer,
    private adminUsersService: AdminUsersService
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios de documentos actualizados
    this.updateRejectedDocumentsListener();

    // Obtener documentos al inicializar
    this.eventoSubscription = this.eventoServ
      .obtenerDocumentos()
      .subscribe((data) => {
        this.documentos = data?.map((documento) => {
          documento.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            documento.urlDocumento
          );
          if (documento.estatusId === 4) {
            this.docsRechazados.push(documento);
          } else if (documento.estatusId !== 3) {
            this.docsNoRechazados.push(documento);
          }
          return documento;
        });
      });

    if (this.documentos?.every((documento) => documento.estatusId === 2)) {
      this.estatus = true;
    } else {
      this.estatus = false;
    }

    console.log('Documentos:', this.documentos);
    console.log('Documentos no rechazados:', this.docsNoRechazados);
    console.log('Documentos rechazados:', this.docsRechazados);
    console.log('documentos actualizados:', this.docsActualizados);
  }

  updateRejectedDocumentsListener() {
    this.eventoServ.getDownloadURLCuidador().subscribe(
      (data: ItDocumentacion | null) => {
        if (data) {
          console.log('getDownloadURL received:', data);

          this.docsRechazados.forEach((docRechazado, index) => {
            if (
              docRechazado.nombreDocumento === data.nombreDocumento &&
              docRechazado.tipoDocumento === data.tipoDocumento
            ) {
              docRechazado.estatusId = data.estatusId;
              docRechazado.urlDocumento = data.urlDocumento;
              this.docsActualizados.push(docRechazado);
              this.docsRechazados.splice(index, 1);
            }
          });

          console.log('Documentos actualizados:', this.docsActualizados);
        }
      },
      (error) => {
        console.error('Error in getDownloadURL:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.documentos?.forEach((documento) => {
      const modalOptions: ModalOptions = {
        placement: 'center',
        backdrop: 'dynamic',
        backdropClasses:
          'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        closable: true,
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

  enviarDocumentos() {
    this.adminUsersService.updateDocumentos(this.docsActualizados).subscribe(
      (response) => {
        console.log('Documentos actualizados correctamente', response);
        Swal.fire({
          title: '¡Operación exitosa!',
          text: 'Se ha actualizado el estatus de los documentos.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000, // La alerta desaparecerá automáticamente después de 2 segundos
          customClass: {
            icon: 'custom-icon-blue', // Clase personalizada para el icono
          },
        });
      },
      (error) => {
        console.error('Error al actualizar documentos', error);
      }
    );
    console.log('Documentos Guardados', this.documentos);
  }

  openModal(documento: any) {
    this.modals[documento.idDocumentacion].show();
  }

  closeModal(documento: any) {
    this.modals[documento.idDocumentacion].hide();
  }
}
