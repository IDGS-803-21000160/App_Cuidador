import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativeHomepageComponent } from './informative-homepage/informative-homepage.component';
import { LoginComponent } from '../auth/login/login.component';
import { InfoRolsComponent } from '../global-components/info-rols/info-rols.component';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { FormCuidadorComponent } from '../cuidador/form-cuidador/form-cuidador.component';

const routes: Routes = [
  {
    path: '',
    component: InformativeHomepageComponent,
    children: [
      { path: '', redirectTo: 'formFamiliar', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: PageInitialComponent },
      { path: 'form', component: FormCuidadorComponent },
      {
        path: 'formFamiliar',
        loadChildren: () =>
          import('../adultomayor/adultomayor.module').then(
            (m) => m.AdultomayorModule
          ),
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageCuidadorRoutingModule {}
