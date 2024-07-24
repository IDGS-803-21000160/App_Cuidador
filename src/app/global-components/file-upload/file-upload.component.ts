import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EventServiceService } from '../../services/event-service.service';
import { Documentacion } from '../../interfaces/documentacion';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadStatus: string = '';
  uploadProgress: Observable<number | undefined> | undefined;
  downloadURL: Observable<string> | undefined;
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  //Propiedades para el objeto
  @Input() tipoDocumento: string = '';
  @Input() nombreDoc: string = '';

  constructor(
    private storage: AngularFireStorage,
    private eventServices: EventServiceService
  ) {}

  //Funcion para formatear la fecha
  getFormattedDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
    if (this.selectedFile) {
      this.uploadStatus = `Archivo seleccionado: ${this.selectedFile.name}`;
      this.uploadFile();
    } else {
      this.uploadStatus = 'No se seleccionó ningún archivo';
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploadStatus = 'Subiendo archivo...';
      const filePath = `uploads/${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task: AngularFireUploadTask = this.storage.upload(
        filePath,
        this.selectedFile
      );

      this.uploadProgress = task.percentageChanges();

      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe({
              next: (url) => {
                this.uploadStatus = 'Archivo subido exitosamente';
                this.downloadURL = fileRef.getDownloadURL();
                const datosDocumento: Documentacion = {
                  id_documentacion: 0,
                  persona_id: 0,
                  tipo_documento: this.tipoDocumento,
                  nombre_documento: this.nombreDoc,
                  url_documento: url,
                  fecha_emision: this.getFormattedDate(new Date()),
                  fecha_expiracion: this.getFormattedDate(new Date()),
                  version: 1,
                  estatus_id: 1,
                  fecha_registro: this.getFormattedDate(new Date()),
                  usuario_registro: 0,
                  fecha_modificacion: this.getFormattedDate(new Date()),
                  usuario_modifico: 0,
                };
                this.eventServices.setDownloadURL(datosDocumento);
              },
              error: (error) => {
                this.uploadStatus = `Error al obtener la URL de descarga: ${error.message}`;
              },
            });
          })
        )
        .subscribe({
          next: (snapshot) => {
            if (snapshot) {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.uploadStatus = `Progreso de la carga: ${progress.toFixed(
                2
              )}%`;
            }
          },
          error: (error) => {
            this.uploadStatus = `Error durante la carga: ${error.message}`;
          },
        });
    } else {
      this.uploadStatus = 'No se seleccionó ningún archivo';
    }
  }

  //Metodo para limpiar:
  resetFileInput(): void {
    console.log('Hola');

    const fileInput = <HTMLInputElement>(
      document.getElementById('file_refPersonales')
    );
    if (fileInput) {
      fileInput.value = '';
    }
    this.uploadStatus = '';
    this.uploadProgress = of(undefined);
    this.selectedFile = null;
    this.downloadURL = undefined;
    this.reset.emit();
    console.log('popo');
  }
}
