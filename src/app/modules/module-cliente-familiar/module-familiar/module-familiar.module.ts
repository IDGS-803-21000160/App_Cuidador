import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleFamiliarRoutingModule } from './module-familiar-routing.module';
import { PagePrincipalComponent } from './page-principal/page-principal.component';
import { GlobalSidebarComponent } from '../../../global-components/global-sidebar/global-sidebar.component';
import { FamiliarTabsComponent } from './components/familiar-tabs/familiar-tabs.component';
import { FamiliarDashboardComponent } from './components/familiar-dashboard/familiar-dashboard.component';
import { FamAdultoComponent } from './components/fam-adulto/fam-adulto.component';
import { GlobalListUserComponent } from '../../../global-components/global-list-user/global-list-user.component';
import { BallInfoComponent } from '../../../global-components/ball-info/ball-info.component';
import { FileUploadComponent } from '../../../global-components/file-upload/file-upload.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../../../../environments/environment';

import { FormsModule } from '@angular/forms';
import { AdultoMayorTabsComponent } from './components/adulto-mayor-tabs/adulto-mayor-tabs.component';
import { AccountComponent } from './components/finance/account/account.component';
import { NavbarFinanceComponent } from './components/finance/navbar-finance/navbar-finance.component';
import { TransactionsComponent } from './components/finance/transactions/transactions.component';
import { SpinnerNotShadowComponent } from '../../../global-components/spinner-not-shadow/spinner-not-shadow.component';
import { WarningAlertComponent } from '../../../global-components/alertsLabels/warning-alert/warning-alert.component';
import { TableReportingComponent } from '../../../global-components/table-reporting/table-reporting.component';

@NgModule({
  declarations: [
    PagePrincipalComponent,
    FamiliarTabsComponent,
    FamiliarDashboardComponent,
    FamAdultoComponent,
    AdultoMayorTabsComponent,
    AccountComponent,
    NavbarFinanceComponent,
    TransactionsComponent,
  ],
  imports: [
    CommonModule,
    ModuleFamiliarRoutingModule,
    GlobalSidebarComponent,
    GlobalListUserComponent,
    BallInfoComponent,
    FormsModule,
    FileUploadComponent,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    SpinnerNotShadowComponent,
    WarningAlertComponent,
    TableReportingComponent,
  ],
  exports: [PagePrincipalComponent, FamAdultoComponent],
})
export class ModuleFamiliarModule {}
