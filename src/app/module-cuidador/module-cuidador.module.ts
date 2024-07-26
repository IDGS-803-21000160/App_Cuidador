import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuidadorDashboardComponent } from './components/cuidador-dashboard/cuidador-dashboard.component';
import { CuidadorDocumentsComponent } from './components/cuidador-documents/cuidador-documents.component';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { ModuleCuidadorRoutingModule } from './module-cuidador-routing.module';

@NgModule({
  declarations: [
    CuidadorDashboardComponent,
    CuidadorDocumentsComponent,
    PagePrincipalComponent,
  ],
  imports: [CommonModule, ModuleCuidadorRoutingModule],
  exports: [PagePrincipalComponent],
})
export class ModuleCuidadorModule {}
