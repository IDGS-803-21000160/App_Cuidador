import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceServicesService } from '../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FinanceRoutingModule],
  providers: [FinanceServicesService],
})
export class FinanceModule {}
