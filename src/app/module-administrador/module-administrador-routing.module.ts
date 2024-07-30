import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageadminPrincipalComponent } from './pageadmin-principal/pageadmin-principal.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTabsComponent } from './components/profile/admin-tabs/admin-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: PageadminPrincipalComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      {
        path: 'solicitudes',
        loadChildren: () =>
          import(
            '../module-administrador/components/solicitudes/solicitudes.module'
          ).then((m) => m.SolicitudesModule),
      },
      { path: 'tabs', component: AdminTabsComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAdministradorRoutingModule {}
