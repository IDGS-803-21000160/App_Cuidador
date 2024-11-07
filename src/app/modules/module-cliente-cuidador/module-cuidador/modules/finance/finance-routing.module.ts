import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarFinanceComponent } from '../../components/navbar-finance/navbar-finance.component';
import { AccountComponent } from '../../components/finance/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarFinanceComponent,
    children: [{ path: 'accounts', component: AccountComponent }],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
