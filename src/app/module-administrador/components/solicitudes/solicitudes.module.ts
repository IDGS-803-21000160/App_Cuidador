import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { GlobalListUserComponent } from '../../../global-components/global-list-user/global-list-user.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SolicitudesRoutingModule, GlobalListUserComponent],
})
export class SolicitudesModule {}
