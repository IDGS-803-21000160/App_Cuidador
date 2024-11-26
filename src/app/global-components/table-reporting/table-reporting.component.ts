import { Component, Input, OnInit } from '@angular/core';
import { formatDate, formatSaldo } from '../../globalfunctions/dates';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PdfTransaccionComponent } from '../pdfS/pdf-transaccion/pdf-transaccion.component'; // Importa CommonModule

@Component({
  selector: 'app-table-reporting',
  standalone: true,
  imports: [CommonModule, PdfTransaccionComponent],
  templateUrl: './table-reporting.component.html',
  styleUrl: './table-reporting.component.css',
})
export class TableReportingComponent implements OnInit {
  @Input() data: any = [];
  @Input() cuentaBancaria: any;
  isModalOpen = false;

  formatDate(dateString: string): string {
    return formatDate(dateString);
  }

  formatSaldo(saldo: string): string {
    return formatSaldo(saldo);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('Hola, esto llego bb', this.data);
    console.log('Hola, esto llego Account', this.cuentaBancaria);
  }

  selectedItem: any = null;

  openModal(item: any) {
    this.selectedItem = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
}
