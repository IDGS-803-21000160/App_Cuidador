import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCuidadorComponent } from '../../components/home-cuidador/home-cuidador.component';

const routes: Routes = [
  {
    path: '',
    component: HomeCuidadorComponent,
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
