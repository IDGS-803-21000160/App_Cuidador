import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliarRoutingModule } from './familiar-routing.module';
import { BallInfoComponent } from '../../../../../global-components/ball-info/ball-info.component';
import { FileUploadComponent } from '../../../../../global-components/file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FamiliarRoutingModule,
    BallInfoComponent,
    FileUploadComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FamiliarModule {}
