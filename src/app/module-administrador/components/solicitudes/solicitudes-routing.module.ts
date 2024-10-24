import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSolicitudesComponent } from './admin-solicitudes/admin-solicitudes.component';
import { AdminTabsComponent } from '../profile/admin-tabs/admin-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminSolicitudesComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesRoutingModule {}
