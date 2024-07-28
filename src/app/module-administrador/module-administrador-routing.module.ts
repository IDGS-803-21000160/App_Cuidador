import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageadminPrincipalComponent } from './pageadmin-principal/pageadmin-principal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSolicitudesComponent } from './components/admin-solicitudes/admin-solicitudes.component';

const routes: Routes = [
  {
    path: '',
    component: PageadminPrincipalComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'solicitudes', component: AdminSolicitudesComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAdministradorRoutingModule {}
