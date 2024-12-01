import { Component } from '@angular/core';
import {
  formatDate,
  formatSaldo,
} from '../../../../../../globalfunctions/dates';
import { AuthService } from '../../../../../../auth/auth.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  formatDate = formatDate;
  formatSaldo = formatSaldo;

  transacciones: any = [];
  recentTransactions: any = [];
  isLoading = false;
  saldoTotal: string = '';
  saldoActual: string = '';

  constructor(
    private currentUser: AuthService,
    private finanzasService: FinanceServicesService
  ) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.isLoading = true;
    this.finanzasService
      .getFinanzasUsuarioFamiliar(
        this.currentUser.getCurrentUser().user.idUsuario
      )
      .subscribe(
        (response) => {
          this.transacciones = response.transaccionSaldo;
          this.recentTransactions = this.transacciones.slice(0, 5);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al cargar las transacciones',
          });
        }
      );
  }
}
