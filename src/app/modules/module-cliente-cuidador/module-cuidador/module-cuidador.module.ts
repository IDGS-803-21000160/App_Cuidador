import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadorDashboardComponent } from './components/cuidador-dashboard/cuidador-dashboard.component';
import { CuidadorDocumentsComponent } from './components/cuidador-documents/cuidador-documents.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ModuleCuidadorRoutingModule } from './module-cuidador-routing.module';
import { GlobalSidebarComponent } from '../../../global-components/global-sidebar/global-sidebar.component';
import { CuidadorTabsComponent } from './components/cuidador-tabs/cuidador-tabs.component';
import { EventServiceService } from '../../../services/event-service.service';
import { TablaDocsComponent } from './components/tabla-docs/tabla-docs.component';
import { FileUploadComponent } from '../../../global-components/file-upload/file-upload.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../../../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HomeCuidadorComponent } from './components/home-cuidador/home-cuidador.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';
import { NavbarFinanceComponent } from './components/navbar-finance/navbar-finance.component';
import { AccountComponent } from './components/finance/account/account.component';
import { SpinnerNotShadowComponent } from '../../../global-components/spinner-not-shadow/spinner-not-shadow.component';
import { AvailabilityComponent } from './components/services/availability/availability.component';
import { CommentsComponent } from './components/services/comments/comments.component';
import { HistoricalComponent } from './components/services/historical/historical.component';
import { NavbarServicesComponent } from './components/services/navbar-services/navbar-services.component';
import { CareHistoryComponent } from './components/finance/care-history/care-history.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CuidadorDashboardComponent,
    CuidadorDocumentsComponent,
    PagePrincipalComponent,
    CuidadorTabsComponent,
    TablaDocsComponent,
    HomeCuidadorComponent,
    ListApplicationsComponent,
    NavbarFinanceComponent,
    AccountComponent,
    AvailabilityComponent,
    CommentsComponent,
    HistoricalComponent,
    NavbarServicesComponent,
    CareHistoryComponent,
  ],
  imports: [
    CommonModule,
    ModuleCuidadorRoutingModule,
    GlobalSidebarComponent,
    FileUploadComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    SpinnerNotShadowComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [PagePrincipalComponent],
})
export class ModuleCuidadorModule {
  constructor(private eventService: EventServiceService) {
    this.eventService.recibirCuidador().subscribe((cuidador) => {
      console.log('Cuidador recibido:', cuidador);
    });
  }
}
