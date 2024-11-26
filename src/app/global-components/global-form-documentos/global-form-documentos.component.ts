import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalInterface } from 'flowbite';
import { AuthService } from '../../auth/auth.service';
import { InfoDocumentosService } from '../../services/global-services/info-documentos.service';

@Component({
  selector: 'app-global-form-documentos',
  standalone: true,
  imports: [],
  templateUrl: './global-form-documentos.component.html',
  styleUrl: './global-form-documentos.component.css',
})
export class GlobalFormDocumentosComponent implements OnInit {
  @ViewChild('modalElement', { static: true }) modalElement!: ElementRef;
  private modals: { [key: string]: ModalInterface } = {};

  constructor(
    private currentUser: AuthService,
    private documentService: InfoDocumentosService
  ) {}

  ngOnInit(): void {
    const currentUser = this.currentUser.getCurrentUser();
    console.log('Current user is: ', currentUser);

    const idUsuario = currentUser.user.idUsuario;

    this.documentService.getInDocs(idUsuario).subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          console.log('Your documents are: ', response);
          response.forEach((documento) => {
            this.modals[documento.idDocumentacion] = new ModalInterface(
              this.modalElement.nativeElement,
              {
                id: documento.idDocumentacion,
                title: documento.nombre,
                content: documento.descripcion,
              }
            );
          });
        }
      },
      (error) => {
        console.error('Error fetching documents:', error);
      }
    );
  }

  openModal(documento: any) {
    this.modals[documento.idDocumentacion].show();
  }

  closeModal(documento: any) {
    this.modals[documento.idDocumentacion].hide();
  }
}
