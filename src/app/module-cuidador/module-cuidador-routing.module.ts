import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuidadorDashboardComponent } from './components/cuidador-dashboard/cuidador-dashboard.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';

const routes: Routes = [
  { path: 'pagePrincipal', component: PagePrincipalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCuidadorRoutingModule {}
