import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFamilarComponent } from './form-familar/form-familar.component';

const routes: Routes = [
  { path: '', component: FormFamilarComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdultomayorRoutingModule {}
