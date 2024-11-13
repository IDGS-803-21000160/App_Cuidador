import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { CuidadorDashboardComponent } from '../../components/cuidador-dashboard/cuidador-dashboard.component';

const routes: Routes = [
  { path: '', component: CuidadorDashboardComponent },

  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
