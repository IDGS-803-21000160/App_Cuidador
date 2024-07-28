import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAdministradorRoutingModule } from './module-administrador-routing.module';
import { PageadminPrincipalComponent } from './pageadmin-principal/pageadmin-principal.component';
import { GlobalSidebarComponent } from '../global-components/global-sidebar/global-sidebar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSolicitudesComponent } from './components/admin-solicitudes/admin-solicitudes.component';

@NgModule({
  declarations: [PageadminPrincipalComponent, AdminDashboardComponent, AdminSolicitudesComponent],
  imports: [
    CommonModule,
    ModuleAdministradorRoutingModule,
    GlobalSidebarComponent,
  ],
  exports: [PageadminPrincipalComponent],
})
export class ModuleAdministradorModule {}
