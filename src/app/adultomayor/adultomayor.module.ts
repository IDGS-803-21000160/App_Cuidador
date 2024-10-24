import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdultomayorRoutingModule } from './adultomayor-routing.module';
import { FormFamilarComponent } from './form-familar/form-familar.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BallInfoComponent } from '../global-components/ball-info/ball-info.component';
import { FileUploadComponent } from '../global-components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    FormFamilarComponent,
    PrivacyNoticeComponent,
    RequirementsComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    AdultomayorRoutingModule,
    FormsModule,
    BallInfoComponent,
    ReactiveFormsModule,
    FileUploadComponent,
  ],
})
export class AdultomayorModule {}
