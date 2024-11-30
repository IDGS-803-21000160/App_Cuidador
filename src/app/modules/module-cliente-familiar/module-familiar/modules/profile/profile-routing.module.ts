import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliarTabsComponent } from '../../components/familiar-tabs/familiar-tabs.component';
import { GlobalFormInfoPersonalComponent } from '../../../../../global-components/global-form-info-personal/global-form-info-personal.component';
import { GlobalFormInfoMedicaComponent } from '../../../../../global-components/global-form-info-medica/global-form-info-medica.component';
import { GlobalFormDocumentosComponent } from '../../../../../global-components/global-form-documentos/global-form-documentos.component';

const routes: Routes = [
  {
    path: '',
    component: FamiliarTabsComponent,
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
