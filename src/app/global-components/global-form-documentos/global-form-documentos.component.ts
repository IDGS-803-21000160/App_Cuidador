import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Modal, ModalInterface, ModalOptions } from 'flowbite';
import { AuthService } from '../../auth/auth.service';
import { InfoDocumentosService } from '../../services/global-services/info-documentos.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AdminUsersService } from '../../services/admin-users.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-form-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-form-documentos.component.html',
  styleUrl: './global-form-documentos.component.css',
})
export class GlobalFormDocumentosComponent implements OnInit {
  private modals: { [key: number]: ModalInterface } = {};

  documentos: any[] = [];
  docsNoRechazados: any[] = [];
  docsRechazados: any[] = [];
  docsActualizados: any[] = [];
  estatus: boolean = false;

  constructor(
    private currentUser: AuthService,
    private documentService: InfoDocumentosService,
    private sanitizer: DomSanitizer,
    private adminUsersService: AdminUsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const currentUser = this.currentUser.getCurrentUser();
    console.log('Current user is: ', currentUser);

    const idUsuario = currentUser.user.idUsuario;

    // Obtener documentos del usuario
    this.documentService.getInDocs(idUsuario).subscribe(
      (data) => {
        this.documentos = data.map((documento: any) => {
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

        console.log('Documentos cargados:', this.documentos);
        console.log('Documentos no rechazados:', this.docsNoRechazados);

        // Forzar que Angular actualice el DOM y luego inicializar los modales
        this.cdr.detectChanges();
        setTimeout(() => this.initializeModals(), 0);
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  private initializeModals(): void {
    console.log(
      'Inicializando modales para documentos no rechazados:',
      this.docsNoRechazados
    );

    this.docsNoRechazados.forEach((documento) => {
      const modalElement = document.getElementById(
        `extralarge-modal-${documento.idDocumentacion}`
      );

      if (modalElement) {
        console.log(
          `Inicializando modal para idDocumentacion: ${documento.idDocumentacion}`
        );
        this.modals[documento.idDocumentacion] = new Modal(modalElement, {
          placement: 'center',
          backdrop: 'dynamic',
          backdropClasses:
            'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
          closable: true,
        });
      } else {
        console.error(
          `No se encontró el elemento modal en el DOM para idDocumentacion: ${documento.idDocumentacion}`
        );
      }
    });
  }

  openModal(documento: any) {
    const modal = this.modals[documento.idDocumentacion];
    if (modal) {
      console.log(
        `Abriendo modal para idDocumentacion: ${documento.idDocumentacion}`
      );
      modal.show();
    } else {
      console.error(
        `No se pudo abrir el modal porque no existe en this.modals: ${documento.idDocumentacion}`
      );
    }
  }

  closeModal(documento: any) {
    const modal = this.modals[documento.idDocumentacion];
    if (modal) {
      modal.hide();
    } else {
      console.error(
        `No se pudo cerrar el modal porque no existe en this.modals: ${documento.idDocumentacion}`
      );
    }
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
          timer: 2000,
        });
      },
      (error) => {
        console.error('Error al actualizar documentos', error);
      }
    );
    console.log('Documentos Guardados', this.documentos);
  }
}
