import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuidadorTabsComponent } from '../../components/cuidador-tabs/cuidador-tabs.component';
import { FormInfopersonalComponent } from '../../../../../global-components/form-infopersonal/form-infopersonal.component';
import { FormInfomedicaComponent } from '../../../../../global-components/form-infomedica/form-infomedica.component';
import { FormDocumentosComponent } from '../../../../../global-components/form-documentos/form-documentos.component';
import { TablaDocsComponent } from '../../components/tabla-docs/tabla-docs.component';

const routes: Routes = [
  {
    path: '',
    component: CuidadorTabsComponent,
    children: [
      { path: 'infoPersonal', component: FormInfopersonalComponent },
      { path: 'infoMedica', component: FormInfomedicaComponent },
      { path: 'documentos', component: TablaDocsComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
