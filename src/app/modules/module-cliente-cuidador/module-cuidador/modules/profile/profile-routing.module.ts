import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuidadorTabsComponent } from '../../components/cuidador-tabs/cuidador-tabs.component';
import { FormInfopersonalComponent } from '../../../../../global-components/form-infopersonal/form-infopersonal.component';
import { FormInfomedicaComponent } from '../../../../../global-components/form-infomedica/form-infomedica.component';
import { FormDocumentosComponent } from '../../../../../global-components/form-documentos/form-documentos.component';
import { TablaDocsComponent } from '../../components/tabla-docs/tabla-docs.component';
import { GlobalFormInfoPersonalComponent } from '../../../../../global-components/global-form-info-personal/global-form-info-personal.component';
import { GlobalFormInfoMedicaComponent } from '../../../../../global-components/global-form-info-medica/global-form-info-medica.component';
import { GlobalFormDocumentosComponent } from '../../../../../global-components/global-form-documentos/global-form-documentos.component';

const routes: Routes = [
  {
    path: '',
    component: CuidadorTabsComponent,
    children: [
      { path: '', redirectTo: 'infoPersonal', pathMatch: 'full' },
      { path: 'infoPersonal', component: GlobalFormInfoPersonalComponent },
      { path: 'infoMedica', component: GlobalFormInfoMedicaComponent },
      { path: 'documentos', component: GlobalFormDocumentosComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
