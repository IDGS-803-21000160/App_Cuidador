import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { ServicesServicesService } from '../../../../../../services/services-cliente-cuidador/services-services/services-services.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-services-manaement',
  templateUrl: './services-manaement.component.html',
  styleUrl: './services-manaement.component.css',
})
export class ServicesManaementComponent implements OnInit {
  contracts: any[] = [];
  filteredContracts: any[] = [];
  isLoading = true;

  constructor(
    private currentUser: AuthService,
    private services: ServicesServicesService,
    private finance: FinanceServicesService
  ) {}

  ngOnInit() {
    const user = this.currentUser.getCurrentUser();

    console.log('Hola a todes', this.currentUser.getCurrentUser());
    this.finance
      .getFinanzasListaContratos(user.user.idUsuario, '1')
      .subscribe((data) => {
        if (data) {
          this.contracts = data;
          this.filteredContracts = [...this.contracts];

          console.log('Finanzas de los contratos:', data.length);
          this.isLoading = false;
        } else {
          console.log('No hay contratos');
          this.isLoading = true;
        }
      });
  }

  filterByStatus(status: string): void {
    this.filteredContracts = this.contracts.filter(
      (contract) => contract.estatus?.nombre === status
    );
  }

  getStatusClass(estatus: string): string {
    switch (estatus) {
      case 'ACEPTADA':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Dark':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'RECHAZADA':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'CONCLUIDA':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'ESPERA':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'EN CURSO':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      case 'Purple':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Pink':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  generatePDF(contract: any) {
    const doc = new jsPDF();

    // Encabezado del PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(`Detalle del Contrato CU-00${contract.idContrato}`, 20, 20);

    // Información general
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50); // Gris oscuro
    doc.text('Resumen del contrato de servicio de cuidado.', 20, 30);

    doc.text(
      `Fecha de inicio: ${new Date(
        contract.horarioInicio
      ).toLocaleDateString()}`,
      20,
      40
    );

    doc.text(
      `Fecha de fin: ${new Date(contract.horarioFin).toLocaleDateString()}`,
      20,
      50
    );

    // Línea divisoria
    doc.setDrawColor(0, 0, 0); // Negro
    doc.line(20, 60, 190, 60);

    // Sección "Total"
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Negro
    doc.text('Total del Servicio', 20, 70);
    doc.setFontSize(14);
    doc.text(`$ ${contract.importeCuidado.toFixed(2)}`, 180, 70, {
      align: 'right',
    });

    // Línea divisoria para separar el total
    doc.line(20, 75, 190, 75);

    // Detalle del Cuidador
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Información del Cuidador', 20, 85);

    const cuidador = contract.personaCuidador;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(
      `Nombre: ${cuidador.nombre} ${cuidador.apellidoPaterno} ${cuidador.apellidoMaterno}`,
      20,
      95
    );
    doc.text(`Correo: ${cuidador.correoElectronico}`, 20, 105);
    doc.text(`Teléfono: ${cuidador.telefonoMovil}`, 20, 115);

    // Detalle del Cliente
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Información del Cliente', 20, 125);

    const cliente = contract.personaCliente;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(
      `Nombre: ${cliente.nombre} ${cliente.apellidoPaterno} ${cliente.apellidoMaterno}`,
      20,
      135
    );
    doc.text(`Correo: ${cliente.correoElectronico}`, 20, 145);
    doc.text(`Teléfono: ${cliente.telefonoMovil}`, 20, 155);

    // Estatus del contrato
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Estatus del Contrato', 20, 165);

    const estatus = contract.estatus;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Estatus: ${estatus.nombre}`, 20, 175);
    doc.text(`Código: ${estatus.codigo}`, 20, 185);
    doc.text(`Color: ${estatus.color}`, 20, 195);

    // Aviso de privacidad
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100); // Gris para el aviso de privacidad
    doc.text('Aviso de Privacidad:', 20, 210);
    doc.text(
      'La información contenida en este documento es confidencial y para uso exclusivo del servicio de cuidado.',
      20,
      215,
      { maxWidth: 170 }
    );

    // Guardamos el PDF
    doc.save(`Contrato_CU-00${contract.idContrato}.pdf`);
  }
}
