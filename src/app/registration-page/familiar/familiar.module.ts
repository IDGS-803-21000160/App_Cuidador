import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliarRoutingModule } from './familiar-routing.module';
import { FormComponent } from './components/form/form.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { MainFormComponent } from './main-form/main-form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from '../../global-components/file-upload/file-upload.component';
import { BallInfoComponent } from '../../global-components/ball-info/ball-info.component';

@NgModule({
  declarations: [
    FormComponent,
    PrivacyNoticeComponent,
    RequirementsComponent,
    MainFormComponent,
  ],
  imports: [
    CommonModule,
    FamiliarRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadComponent,
    BallInfoComponent,
  ],
  exports: [MainFormComponent],
})
export class FamiliarModule {}
