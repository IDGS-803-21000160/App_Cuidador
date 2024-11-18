import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativeHomepageComponent } from './informative-homepage/informative-homepage.component';
import { LoginComponent } from '../auth/login/login.component';
import { InfoRolsComponent } from '../global-components/info-rols/info-rols.component';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { FormCuidadorComponent } from '../registration-page/cuidador/form-cuidador/form-cuidador.component';
import { PerfilesRegistroComponent } from './components/perfiles-registro/perfiles-registro.component';

const routes: Routes = [
  {
    path: '',
    component: InformativeHomepageComponent,
    children: [
      { path: '', redirectTo: 'form', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: PageInitialComponent },
      { path: 'form', component: PerfilesRegistroComponent },
      {
        path: 'formFamiliar',
        loadChildren: () =>
          import('../registration-page/familiar/familiar-routing.module').then(
            (m) => m.FamiliarRoutingModule
          ),
      },
      { path: 'formCuidador', component: FormCuidadorComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageCuidadorRoutingModule {}
