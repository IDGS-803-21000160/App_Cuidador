import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageCuidadorRoutingModule } from './homepage-cuidador-routing.module';
import { InformativeHomepageComponent } from './informative-homepage/informative-homepage.component';
import { GlobalNavbarComponent } from '../global-components/global-navbar/global-navbar.component';

@NgModule({
  declarations: [InformativeHomepageComponent],
  imports: [CommonModule, HomepageCuidadorRoutingModule, GlobalNavbarComponent],
  exports: [InformativeHomepageComponent],
})
export class HomepageCuidadorModule {}
