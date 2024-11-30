import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePrincipalComponent } from './page-principal/page-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipalComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },

      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'familiar',
        loadChildren: () =>
          import('./modules/familiar/familiar.module').then(
            (m) => m.FamiliarModule
          ),
      },
      {
        path: 'finance',
        loadChildren: () =>
          import('./modules/finance/finance.module').then(
            (m) => m.FinanceModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./modules/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  { path: '', redirectTo: ' ', pathMatch: 'full' },
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
