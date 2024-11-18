import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFamiliarRoutingModule } from './module-familiar-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { GlobalSidebarComponent } from '../../../global-components/global-sidebar/global-sidebar.component';

@NgModule({
  declarations: [PagePrincipalComponent],
  imports: [CommonModule, ModuleFamiliarRoutingModule, GlobalSidebarComponent],
})
export class ModuleFamiliarModule {}
