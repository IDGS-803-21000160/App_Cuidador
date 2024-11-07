import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import { SidebarCuidadorComponent } from '../../../../../../cuidador/sidebar-cuidador/sidebar-cuidador.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isModalOpen = false;
  isLoading = false; // Variable para controlar el estado de carga
  activeTab = 'stats';

  saldoActual: string = '';

  constructor(
    private currentUser: AuthService,
    private finanzasService: FinanceServicesService
  ) {}

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  formatSaldo(saldo: string): string {
    const number = parseFloat(saldo);
    if (isNaN(number)) {
      return saldo;
    }
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  ngOnInit() {
    this.isLoading = true;
    this.finanzasService
      .getFinanzasUsuarioCuidador(
        this.currentUser.getCurrentUser().user.idUsuario
      )
      .subscribe(
        (data) => {
          console.log(data.saldoActual);

          this.saldoActual = data.saldoActual;
          console.log(this.formatSaldo(this.saldoActual));

          console.log(this.saldoActual);

          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }
}
