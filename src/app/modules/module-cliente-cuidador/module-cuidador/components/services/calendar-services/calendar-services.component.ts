import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { ServicesServicesService } from '../../../../../../services/services-cliente-cuidador/services-services/services-services.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';

@Component({
  selector: 'app-calendar-services',
  templateUrl: './calendar-services.component.html',
  styleUrl: './calendar-services.component.css',
})
export class CalendarServicesComponent implements OnInit {
  contracts: any[] = [];
  apiResponse: any[] = [];
  highlightedDays: string[] = []; // Fechas a resaltar
  selectedContract: any = null;

  // Calendario
  months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  calendarDays: { date: string; label: number | null }[] = [];
  currentYear: number = new Date().getFullYear();
  currentMonth: number = new Date().getMonth();

  constructor(
    private currentUser: AuthService,
    private services: ServicesServicesService,
    private financeService: FinanceServicesService
  ) {}

  ngOnInit() {
    // Obtén el usuario actual y muestra los horarios y contratos
    const currentUserId = this.currentUser.getCurrentUser()?.id || '6'; // Fallback al id '6'

    console.log('Usuario actual:', this.currentUser.getCurrentUser());

    // Obtener horarios del cuidador
    this.services.getHorariosCuidador(currentUserId).subscribe(
      (horarios) => {
        console.log('Horarios:', horarios);
      },
      (error) => {
        console.error('Error obteniendo horarios:', error);
      }
    );

    // Obtener contratos financieros y filtrar
    this.financeService.getFinanzasListaContratos(currentUserId, '1').subscribe(
      (historial) => {
        this.apiResponse = historial;
        console.log('Historial:', historial);

        // Filtrar contratos aceptados
        this.contracts = this.apiResponse.filter(
          (c) => c.estatus?.nombre === 'ACEPTADA'
        );

        // Extraer las fechas a resaltar
        this.highlightedDays = this.contracts.map(
          (c) => new Date(c.horarioInicio).toISOString().split('T')[0]
        );

        console.log('Contratos aceptados:', this.contracts);
        console.log('Fechas resaltadas:', this.highlightedDays);
      },
      (error) => {
        console.error('Error obteniendo contratos:', error);
      }
    );

    // Generar el calendario inicial
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.calendarDays = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);

    // Días vacíos antes del inicio del mes
    for (let i = 0; i < firstDay.getDay(); i++) {
      this.calendarDays.push({ date: '', label: null });
    }

    // Días del mes
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(this.currentYear, this.currentMonth, day);
      this.calendarDays.push({
        date: date.toISOString().split('T')[0],
        label: day,
      });
    }
  }

  changeMonth(direction: number): void {
    this.currentMonth += direction;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  isHighlighted(date: string): boolean {
    return this.highlightedDays.includes(date);
  }

  showDetails(date: string): void {
    this.selectedContract = this.contracts.find(
      (contract) =>
        new Date(contract.horarioInicio).toISOString().split('T')[0] === date
    );
    if (this.selectedContract) {
      console.log('Detalles del contrato seleccionado:', this.selectedContract);
    } else {
      console.log('No hay contratos para esta fecha.');
    }
  }
}
