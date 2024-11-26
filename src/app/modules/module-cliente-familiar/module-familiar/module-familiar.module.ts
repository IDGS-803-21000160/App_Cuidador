import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFamiliarRoutingModule } from './module-familiar-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { GlobalSidebarComponent } from '../../../global-components/global-sidebar/global-sidebar.component';
import { FamiliarTabsComponent } from './components/familiar-tabs/familiar-tabs.component';
import { FamiliarDashboardComponent } from './components/familiar-dashboard/familiar-dashboard.component';

@NgModule({
  declarations: [PagePrincipalComponent, FamiliarTabsComponent, FamiliarDashboardComponent],
  imports: [CommonModule, ModuleFamiliarRoutingModule, GlobalSidebarComponent],
})
export class ModuleFamiliarModule {}
