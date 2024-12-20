import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarServicesComponent } from '../../components/services/navbar-services/navbar-services.component';
import { AvailabilityComponent } from '../../components/services/availability/availability.component';
import { CommentsComponent } from '../../components/services/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarServicesComponent,
    children: [
      { path: 'availability', component: AvailabilityComponent },
      { path: 'comments', component: CommentsComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
