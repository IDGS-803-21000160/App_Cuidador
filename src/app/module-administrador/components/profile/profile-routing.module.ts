import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInfopersonalComponent } from '../../../global-components/form-infopersonal/form-infopersonal.component';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTabsComponent,
    children: [{ path: 'infoPersonal', component: FormInfopersonalComponent }],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
