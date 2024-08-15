import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadorDashboardComponent } from './components/cuidador-dashboard/cuidador-dashboard.component';
import { CuidadorDocumentsComponent } from './components/cuidador-documents/cuidador-documents.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ModuleCuidadorRoutingModule } from './module-cuidador-routing.module';
import { GlobalSidebarComponent } from '../global-components/global-sidebar/global-sidebar.component';
import { CuidadorTabsComponent } from './components/cuidador-tabs/cuidador-tabs.component';
import { EventServiceService } from '../services/event-service.service';
import { TablaDocsComponent } from './components/tabla-docs/tabla-docs.component';
import { FileUploadComponent } from '../global-components/file-upload/file-upload.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    CuidadorDashboardComponent,
    CuidadorDocumentsComponent,
    PagePrincipalComponent,
    CuidadorTabsComponent,
    TablaDocsComponent,
  ],
  imports: [
    CommonModule,
    ModuleCuidadorRoutingModule,
    GlobalSidebarComponent,
    FileUploadComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
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
