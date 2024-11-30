import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamAdultoComponent } from '../../components/fam-adulto/fam-adulto.component';

const routes: Routes = [
  { path: '', redirectTo: 'adultos', pathMatch: 'full' },
  { path: 'adultos', component: FamAdultoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliarRoutingModule {}
