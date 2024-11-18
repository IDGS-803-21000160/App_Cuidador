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
import { AdminUsersService } from '../../services/admin-users.service';
import Swal from 'sweetalert2';
import { ItUsuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-form-documentos',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  templateUrl: './form-documentos.component.html',
  styleUrls: ['./form-documentos.component.css'],
})
export class FormDocumentosComponent implements AfterViewInit, OnInit {
  eventoSubscription: Subscription | undefined;
  eventSubscriptionUser: Subscription | undefined;

  documentos: ItDocumentacion[] | undefined = [];
  docsLiberados: ItDocumentacion[] | undefined = [];
  user: any = null;
  backgroundStyle = 'linear-gradient(to right, #ffffff, #f0f0f0)';

  @ViewChild('modalElement', { static: true }) modalElement!: ElementRef;

  private modals: { [key: string]: ModalInterface } = {};

  constructor(
    private eventoServ: EventServiceService,
    private sanitizer: DomSanitizer,
    private adminUsersService: AdminUsersService
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
          if (documento.estatusId === 2) {
            this.docsLiberados?.push(documento);
          }
          return documento;
        });
      });

    this.eventSubscriptionUser = this.eventoServ
      .obtenerUsuarioCuidador()
      .subscribe((data: ItUsuario | undefined) => {
        console.log('Usuario Cuidador en docs', data);
        this.user = {
          id_usuario: data?.id_usuario,
          usuarionivel_id: data?.usuarioNivelId,
          tipo_usuarioid: data?.tipoUsuarioId,
          estatusid: 10,
          usuario: data?.usuario,
          contrasenia: data?.contrasenia,
          fecha_registro: data?.fechaRegistro,
          usuario_registro: data?.usuarioRegistro,
          fecha_modificacion: new Date(),
          usuario_modifico: data?.usuarioModifico,
        };
      });
    this.verificarLiberar();
  }

  verificarLiberar() {
    if (this.docsLiberados?.length === this.documentos?.length) {
      const button = document.getElementById('btnLiberar') as HTMLButtonElement;
      button.disabled = false;
    }
  }

  liberarDocumentos() {
    this.adminUsersService.updateUsuario(this.user).subscribe(
      (response) => {
        console.log('Usuario actualizado correctamente', response);

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
      },
      (error) => {
        console.error('Error al actualizar usuario', error);
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
    documento.estatusId = status;

    if (status === 2) {
      div.style.background = 'rgb(76,180,58)';
      div.style.background =
        'linear-gradient(90deg, rgba(76,180,58,1) 0%, rgba(244,244,244,1) 50%, rgba(255,255,255,1) 100%)';
    } else if (status === 4) {
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
    this.adminUsersService.updateDocumentos(this.documentos).subscribe(
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
}
