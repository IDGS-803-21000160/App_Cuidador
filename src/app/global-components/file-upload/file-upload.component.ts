import { Component } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
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

  constructor(
    private storage: AngularFireStorage,
    private eventServices: EventServiceService
  ) {}

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
                  tipo_documento: '',
                  nombre_documento: '',
                  url_documento: url,
                  fecha_emision: Date.now(),
                  fecha_expiracion: Date.now(),
                  version: 1,
                  estatus_id: 1,
                  fecha_registro: Date.now(),
                  usuario_registro: 0,
                  fecha_modificacion: Date.now(),
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
}
