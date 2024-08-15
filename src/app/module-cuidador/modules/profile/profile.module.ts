import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FileUploadComponent } from '../../../global-components/file-upload/file-upload.component';
import { EventServiceService } from '../../../services/event-service.service';

@NgModule({
  declarations: [],

  imports: [CommonModule, ProfileRoutingModule, FileUploadComponent],
})
export class ProfileModule {}
