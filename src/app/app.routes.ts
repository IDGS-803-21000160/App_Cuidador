import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PagePrincipalComponent } from './module-cuidador/page-principal/page-principal.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: 'cuidador',
    loadChildren: () =>
      import('./module-cuidador/module-cuidador.module').then(
        (m) => m.ModuleCuidadorModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'homePageCuidador',
    loadChildren: () =>
      import('./homepage-cuidador/homepage-cuidador.module').then(
        (m) => m.HomepageCuidadorModule
      ),
  },
  { path: '', redirectTo: '/homePageCuidador', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/homePageCuidador',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
