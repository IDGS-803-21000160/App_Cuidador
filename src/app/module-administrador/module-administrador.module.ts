import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAdministradorRoutingModule } from './module-administrador-routing.module';
import { PageadminPrincipalComponent } from './pageadmin-principal/pageadmin-principal.component';
import { GlobalSidebarComponent } from '../global-components/global-sidebar/global-sidebar.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSolicitudesComponent } from './components/solicitudes/admin-solicitudes/admin-solicitudes.component';
import { AdminTabsComponent } from './components/profile/admin-tabs/admin-tabs.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalListUserComponent } from '../global-components/global-list-user/global-list-user.component';
import { FormInfopersonalComponent } from '../global-components/form-infopersonal/form-infopersonal.component';

@NgModule({
  declarations: [
    PageadminPrincipalComponent,
    AdminDashboardComponent,
    AdminSolicitudesComponent,
    AdminTabsComponent,
  ],
  imports: [
    CommonModule,
    ModuleAdministradorRoutingModule,
    GlobalSidebarComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GlobalListUserComponent,
    FormInfopersonalComponent,
  ],
  exports: [PageadminPrincipalComponent],
})
export class ModuleAdministradorModule {}
