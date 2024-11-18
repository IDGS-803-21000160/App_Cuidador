import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCuidadorComponent } from './form-cuidador/form-cuidador.component';
import { SidebarCuidadorComponent } from './sidebar-cuidador/sidebar-cuidador.component';
import { InfoPrivacyNoticeComponent } from './info-privacy-notice/info-privacy-notice.component';
import { EventServiceService } from '../../services/event-service.service';
import { RequirementsComponent } from './requirements/requirements.component';
import { FormComponent } from './form/form.component';
import { BallInfoComponent } from '../../global-components/ball-info/ball-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../../environments/environment';
import { AppComponent } from '../../app.component';
import { FileUploadComponent } from '../../global-components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormCuidadorComponent,
    SidebarCuidadorComponent,
    InfoPrivacyNoticeComponent,
    RequirementsComponent,
    FormComponent,
  ],
  exports: [FormCuidadorComponent],
  providers: [EventServiceService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BallInfoComponent,
    FileUploadComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
})
export class CuidadorModule {}
