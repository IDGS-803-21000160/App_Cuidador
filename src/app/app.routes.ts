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
    //canActivate: [AuthGuard],
  },
  {
    path: 'administrador',
    loadChildren: () =>
      import('./module-administrador/module-administrador.module').then(
        (m) => m.ModuleAdministradorModule
      ),
    //canActivate: [AuthGuard],
  },
  {
    path: 'familiar',
    loadChildren: () =>
      import('./module-familiar/module-familiar.module').then(
        (m) => m.ModuleFamiliarModule
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
