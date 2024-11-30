import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuidadorDashboardComponent } from './components/cuidador-dashboard/cuidador-dashboard.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipalComponent,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./modules/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'request',
        loadChildren: () =>
          import('./modules/request/request.module').then(
            (m) => m.RequestModule
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
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleCuidadorRoutingModule {}
