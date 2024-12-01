import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamAdultoComponent } from '../../components/fam-adulto/fam-adulto.component';
import { AdultoMayorTabsComponent } from '../../components/adulto-mayor-tabs/adulto-mayor-tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'adultos', pathMatch: 'full' },
  {
    path: 'adultos',
    component: FamAdultoComponent,
    children: [{ path: 'adultProfile', component: AdultoMayorTabsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FamiliarRoutingModule {}
