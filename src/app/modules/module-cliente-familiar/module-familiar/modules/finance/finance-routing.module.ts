import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../../components/finance/account/account.component';
import { NavbarFinanceComponent } from '../../components/finance/navbar-finance/navbar-finance.component';
import { TransactionsComponent } from '../../components/finance/transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: ' ', pathMatch: 'full' },
  {
    path: '',
    component: NavbarFinanceComponent,
    children: [
      { path: 'account', component: AccountComponent },
      { path: 'transactions', component: TransactionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
