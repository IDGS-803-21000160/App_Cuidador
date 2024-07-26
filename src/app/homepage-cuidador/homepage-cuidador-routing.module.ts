import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformativeHomepageComponent } from './informative-homepage/informative-homepage.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: InformativeHomepageComponent,
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageCuidadorRoutingModule {}
