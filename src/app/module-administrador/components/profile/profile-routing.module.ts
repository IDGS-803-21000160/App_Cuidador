import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInfopersonalComponent } from '../../../global-components/form-infopersonal/form-infopersonal.component';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';
import { FormInfomedicaComponent } from '../../../global-components/form-infomedica/form-infomedica.component';
import { FormDocumentosComponent } from '../../../global-components/form-documentos/form-documentos.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [
      { path: '', redirectTo: 'infoPersonal', pathMatch: 'full' },
      { path: 'infoPersonal', component: FormInfopersonalComponent },
      { path: 'infoMedica', component: FormInfomedicaComponent },
      { path: 'documentos', component: FormDocumentosComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
