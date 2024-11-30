import { Component, OnInit } from '@angular/core';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import { AuthService } from '../../../../../../auth/auth.service';

@Component({
  selector: 'app-care-history',
  templateUrl: './care-history.component.html',
  styleUrl: './care-history.component.css',
})
export class CareHistoryComponent implements OnInit {
  isLoading = false; // Variable para controlar el estado de carga
  selectedDate: Date = new Date(); // Fecha seleccionada (por defecto, hoy)
  weekDates: Date[] = []; // Días de la semana actual
  idUsuario: string = this.currentUser.getCurrentUser().user.idUsuario;
  tipoUsuario: string = this.currentUser.getCurrentUser().user.tipoUsuarioid;
  contratos: any[] = [];

  isModalOpen = false;
  selectedContrato: any = null;

  openModal(contrato: any) {
    this.selectedContrato = contrato;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedContrato = null;
  }

  constructor(
    private fincanceService: FinanceServicesService,
    private currentUser: AuthService
  ) {
    this.generateWeekDates();
  }

  ngOnInit() {
    this.isLoading = true;

    this.fincanceService
      .getFinanzasListaContratos(this.idUsuario, this.tipoUsuario)
      .subscribe((data) => {
        if (data) {
          this.contratos = data;
          console.log('Yo soy los contratos', data);
          this.isLoading = false;
        } else {
          this.isLoading = false;
        }
      });
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

  formatFecha(fechaString: string): string {
    const fecha = new Date(fechaString);

    const opciones: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };

    return fecha.toLocaleDateString('es-ES', opciones);
  }
  generateFolio(): string {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Genera un número de 6 dígitos
    return `CU-${randomNumber}`;
  }
  // Actualiza la semana cuando se selecciona una nueva fecha
  onDateChange() {
    this.selectedDate = new Date(this.selectedDate); // Convertir la fecha para que sea tipo Date
    this.generateWeekDates();
  }

  // Genera los días de la semana a partir de la fecha seleccionada
  generateWeekDates() {
    const startOfWeek = this.getStartOfWeek(this.selectedDate);
    this.weekDates = Array.from(
      { length: 7 },
      (_, i) => new Date(startOfWeek.getTime() + i * 24 * 60 * 60 * 1000)
    );
  }

  // Calcula el inicio de la semana (lunes)
  getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = day === 0 ? -6 : 1 - day; // Ajusta para comenzar en lunes
    return new Date(date.getTime() + diff * 24 * 60 * 60 * 1000);
  }

  // Cambia a la semana anterior
  prevWeek() {
    this.selectedDate.setDate(this.selectedDate.getDate() - 7);
    this.generateWeekDates();
  }

  // Cambia a la siguiente semana
  nextWeek() {
    this.selectedDate.setDate(this.selectedDate.getDate() + 7);
    this.generateWeekDates();
  }

  // Selecciona un día de la semana
  selectDate(date: Date) {
    this.selectedDate = date;
    console.log(this.contratos);

    const contratosFiltered = this.contratos.filter((contrato) => {
      console.log(contrato.horarioInicio);

      contrato.horarioInicio === '2024-08-15T14:15:00';
    });
    console.log('Fecha seleccionada:', contratosFiltered);

    this.generateWeekDates();
  }

  // Verifica si un día es el seleccionado
  isSelectedDate(date: Date): boolean {
    return (
      this.selectedDate &&
      date.toDateString() === this.selectedDate.toDateString()
    );
  }

  formatFechaSimple(fechaString: string): string {
    const fecha = new Date(fechaString);

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  formatFechaSimpleContratos(fechaString: string): string {
    const fecha = new Date(fechaString);

    const year = fecha.getFullYear() - 1;
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  convertirFecha(fecha: string): string {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }
}
