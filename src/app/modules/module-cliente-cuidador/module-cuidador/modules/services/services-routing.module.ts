import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarServicesComponent } from '../../components/services/navbar-services/navbar-services.component';
import { AvailabilityComponent } from '../../components/services/availability/availability.component';
import { CommentsComponent } from '../../components/services/comments/comments.component';
import { HistoricalComponent } from '../../components/services/historical/historical.component';
import { ServicesManaementComponent } from '../../components/services/services-manaement/services-manaement.component';
import { CalendarServicesComponent } from '../../components/services/calendar-services/calendar-services.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarServicesComponent,
    children: [
      { path: '', redirectTo: 'servicesmanagement', pathMatch: 'full' },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'historical', component: HistoricalComponent },
      { path: 'servicesmanagement', component: ServicesManaementComponent },
      { path: 'calendarservices', component: CalendarServicesComponent },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
