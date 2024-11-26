import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent implements OnInit {
  isLoading = false;
  transacciones: any = [];
  cuentaBancaria: any = {};
  constructor(
    private currentUser: AuthService,
    private finanzasService: FinanceServicesService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.finanzasService
      .getFinanzasUsuarioCuidador(
        this.currentUser.getCurrentUser().user.idUsuario
      )
      .subscribe(
        (data) => {
          this.transacciones = data.movimientoCuenta;
          this.cuentaBancaria = data.cuentaBancaria;
          console.log('Transacciones soy yo', this.transacciones);

          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }
}
