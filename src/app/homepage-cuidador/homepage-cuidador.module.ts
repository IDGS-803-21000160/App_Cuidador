import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageCuidadorRoutingModule } from './homepage-cuidador-routing.module';
import { InformativeHomepageComponent } from './informative-homepage/informative-homepage.component';
import { GlobalNavbarComponent } from '../global-components/global-navbar/global-navbar.component';
import { InfoCuidadorComponent } from './components/infoRoles/info-cuidador/info-cuidador.component';
import { InfoAdultomayorComponent } from './components/infoRoles/info-adultomayor/info-adultomayor.component';
import { InfoColaboradorComponent } from './components/infoRoles/info-colaborador/info-colaborador.component';
import { PageInitialComponent } from './components/page-initial/page-initial.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    InformativeHomepageComponent,
    InfoCuidadorComponent,
    InfoAdultomayorComponent,
    InfoColaboradorComponent,
    PageInitialComponent,
  ],
  imports: [
    CommonModule,
    HomepageCuidadorRoutingModule,
    GlobalNavbarComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
  exports: [InformativeHomepageComponent],
})
export class HomepageCuidadorModule {}
