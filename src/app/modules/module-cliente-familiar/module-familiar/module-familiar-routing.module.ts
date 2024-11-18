import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipalComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleFamiliarRoutingModule {}
