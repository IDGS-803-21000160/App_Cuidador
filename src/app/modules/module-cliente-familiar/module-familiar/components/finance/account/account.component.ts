import { Component } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import Swal from 'sweetalert2';
import {
  formatDate,
  formatSaldo,
} from '../../../../../../globalfunctions/dates';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  isModalOpen = false;
  isLoading = false; // Variable para controlar el estado de carga
  activeTab = 'stats';
  formatDate = formatDate;

  saldoActual: string = '';
  saldoTotal: string = '';
  metodoPagoUsuario: any[] = [];
  transaccionSaldo: any[] = [];
  dataFormateada: any[] = [];

  // Variable para guardar la cuenta bancaria
  cuentaBancaria: any = {};
  numCuenta: number = 0;
  numClaveInterbancaria: number = 0;

  //Variables Modal Edit
  isEditModalOpen = false;
  selectedCard: any = null;

  //Modal Retiro de Saldo
  isRetiroModalOpen = false;

  //Transacciones
  transacciones: any = [];
  recentTransactions: any = [];

  //Realizar un retiro
  montoRetiro: number = 0;
  saldoTotalRetirado: number = 0;
  idSaldo: number = 0;

  //Datos para agregar cuenta bancaria
  numeroCuenta: string = '';
  clableInterbancaria: string = '';
  nombreBanco: string = '';

  constructor(
    private currentUser: AuthService,
    private finanzasService: FinanceServicesService
  ) {}

  openModalRetiro() {
    this.isRetiroModalOpen = true;
  }

  closeModalRetiro() {
    this.isRetiroModalOpen = false;
  }

  openModalEdit(card: any) {
    this.selectedCard = card;
    this.isEditModalOpen = true;
  }

  closeModalEdit() {
    this.isEditModalOpen = false;
    this.selectedCard = null;
  }

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
    console.log('Yo soy el saldo que entra', typeof saldo);

    const number = parseFloat(saldo);
    if (isNaN(number)) {
      return saldo;
    }
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  obtenerTransaccionesRecientes(transacciones: any[]): any[] {
    return transacciones
      .sort(
        (a, b) =>
          new Date(b.fechaMovimiento).getTime() -
          new Date(a.fechaMovimiento).getTime()
      )
      .slice(0, 4);
  }

  ngOnInit() {
    this.isLoading = true;
    this.finanzasService
      .getFinanzasUsuarioFamiliar(
        this.currentUser.getCurrentUser().user.idUsuario
      )
      .subscribe(
        (data) => {
          console.log(data.saldoActual);

          this.saldoActual = data.saldoActual;
          this.metodoPagoUsuario = data.metodoPagoUsuario;
          this.transaccionSaldo = data.transaccionSaldo;

          //this.cuentaBancaria = data.cuentaBancaria;
          //this.transacciones = data.movimientoCuenta;
          this.recentTransactions = this.obtenerTransaccionesRecientes(
            this.transacciones
          );
          this.saldoTotalRetirado = data.saldoActual;
          this.idSaldo = data.saldoId;

          console.log('saldoActual', this.saldoActual);
          console.log('metodoPagoUsuario', this.metodoPagoUsuario);

          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }

  retirarSaldo() {
    const data = {
      idCuentaBancaria: this.cuentaBancaria.idCuentabancaria,
      importe: this.montoRetiro,
      idSaldo: this.idSaldo,
      usuarioId: this.currentUser.getCurrentUser().user.idUsuario,
    };

    if (this.validarSaldo()) {
      Swal.fire({
        title: 'Error',
        text: 'No se pudo realizar el retiro. Por favor, inténtelo de nuevo más tarde.',
        icon: 'error',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log('Se puede retirar el saldo');
      this.finanzasService.retirarSaldoCuidador(data).subscribe(
        (response: string) => {
          this.closeModalRetiro();
          Swal.fire({
            title: 'Retiro exitoso',
            text: response,
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          this.ngOnInit();
        },
        (error) => {
          alert('Error al retirar saldo');
          console.error('Error al retirar saldo:', error);
        }
      );
    }
  }

  validarSaldo() {
    if (this.montoRetiro > this.saldoTotalRetirado) {
      return true;
    } else {
      return false;
    }
  }

  reguistrarCuentaBancaria() {
    const data = {
      usuarioId: this.currentUser.getCurrentUser().user.idUsuario,
      numeroCuenta: parseInt(this.numeroCuenta),
      clabeInterbancaria: parseFloat(this.clableInterbancaria),
      nombreBanco: this.nombreBanco,
    };

    this.finanzasService.registrarCuentaBancaria(data).subscribe(
      (response: string) => {
        this.closeModal();
        Swal.fire({
          title: 'Cuenta bancaria registrada',
          text: response,
          icon: 'success',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
        });
        this.ngOnInit();
      },
      (error) => {
        alert('Error al registrar cuenta bancaria');
        console.error('Error al registrar cuenta bancaria:', error);
      }
    );
  }
}
