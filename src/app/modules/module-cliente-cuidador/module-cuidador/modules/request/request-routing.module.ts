import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListApplicationsComponent } from '../../components/list-applications/list-applications.component';

const routes: Routes = [
  {
    path: '',
    component: ListApplicationsComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestRoutingModule {}
