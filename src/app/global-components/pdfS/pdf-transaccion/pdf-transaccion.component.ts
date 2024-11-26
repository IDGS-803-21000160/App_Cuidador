import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsPDF } from 'jspdf';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { formatDate, formatSaldo } from '../../../globalfunctions/dates';

@Component({
  selector: 'app-pdf-transaccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-transaccion.component.html',
  styleUrl: './pdf-transaccion.component.css',
})
export class PdfTransaccionComponent implements OnInit {
  @Input() transaccion: any;
  @Input() cuentaDestino: any;

  ngOnInit(): void {
    console.log('Hola, esto llego', this.transaccion);
  }

  generatePDF() {
    const doc = new jsPDF();

    // Encabezado del PDF
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(
      `Cuidador Detalle Transacción CU-00${this.transaccion.idMovimientocuenta}`,
      20,
      20
    );

    // Información general
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50); // Gris oscuro
    doc.text('Esperamos que la experiencia haya sido de tu agrado.', 20, 30);

    doc.setTextColor(50, 50, 50); // Gris oscuro
    doc.text(
      `Fecha: ${formatDate(this.transaccion.fechaMovimiento)}`,
      180,
      35,
      {
        align: 'right',
      }
    );

    // Línea divisoria
    doc.setDrawColor(0, 0, 0); // Negro
    doc.line(20, 40, 190, 40);

    // Sección "Total"
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Negro
    doc.text('Total', 20, 50);
    doc.setFontSize(14);
    doc.text(`$ ${formatSaldo(this.transaccion.importeMovimiento)}`, 180, 50, {
      align: 'right',
    });

    // Línea divisoria para separar el total
    doc.line(20, 53, 190, 53);

    // Detalle del Movimiento
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);

    const detalles = [
      { label: 'Concepto:', value: `${this.transaccion.conceptoMovimiento}` },
      {
        label: 'Tipo de Movimiento:',
        value: `${this.transaccion.tipoMovimiento}`,
      },
      {
        label: 'Número de Seguimiento:',
        value: `${this.transaccion.numeroseguimientoBanco}`,
      },
      {
        label: 'Fecha del Movimiento:',
        value: `${formatDate(this.transaccion.fechaMovimiento)}`,
      },
      {
        label: 'Importe:',
        value: `$${formatSaldo(this.transaccion.importeMovimiento)}`,
      },
      {
        label: 'Saldo Anterior a la transaccion:',
        value: `$${formatSaldo(this.transaccion.saldoAnterior)}`,
      },
      {
        label: 'Saldo Actual previo a la transaccion:',
        value: `$${formatSaldo(this.transaccion.saldoActual)}`,
      },
    ];

    // Agregamos los detalles al PDF, en negritas los labels
    let yPosition = 60; // Comienza un poco más abajo para no sobreponer
    doc.setFont('helvetica', 'bold'); // Usamos negritas para los labels

    detalles.forEach((detalle) => {
      doc.setTextColor(0, 0, 0); // Negro para los labels
      doc.text(detalle.label, 20, yPosition); // Label en negritas
      doc.setFont('helvetica', 'normal'); // Regresamos a fuente normal para el valor
      doc.setTextColor(0, 0, 255); // Azul para los valores
      doc.text(detalle.value, 180, yPosition, { align: 'right' }); // Valor a la derecha
      yPosition += 10; // Espaciado entre las filas
      doc.setFont('helvetica', 'bold'); // Regresamos a negritas para el siguiente label
    });

    // Línea divisoria para separar el detalle
    doc.line(20, yPosition + 2, 190, yPosition + 2);

    // Detalle de la cuenta de destino
    yPosition += 15; // Espacio para que no se sobrepongan las secciones
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0); // Negro para los labels
    doc.text('Cuenta de Destino', 20, yPosition);
    yPosition += 7;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0); // Negro para los labels

    doc.text('Banco:', 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(`${this.cuentaDestino.nombrebanco}`, 180, yPosition, {
      align: 'right',
    });
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.text('Cuenta:', 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(`${this.cuentaDestino.numeroCuenta}`, 180, yPosition, {
      align: 'right',
    });
    yPosition += 10;

    doc.setFont('helvetica', 'bold');
    doc.text('Clave Bancaria:', 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(`${this.cuentaDestino.clabeInterbancaria}`, 180, yPosition, {
      align: 'right',
    });
    yPosition += 15;

    // Línea divisoria para separar la cuenta de destino
    doc.line(20, yPosition, 190, yPosition);

    // Aviso de privacidad
    yPosition += 20;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100); // Gris para el aviso de privacidad
    doc.text('Aviso de Privacidad:', 20, yPosition);
    yPosition += 5;

    doc.text(
      'De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, la información que proporcionaste es confidencial y será utilizada únicamente para la gestión de la transacción. No se compartirá con terceros sin tu consentimiento expreso.',
      20,
      yPosition,
      { maxWidth: 170 }
    );
    yPosition += 15;

    doc.text(
      'Si tienes alguna duda o necesitas aclaraciones, por favor contacta a nuestro centro de atención:',
      20,
      yPosition
    );
    yPosition += 5;

    doc.setFont('helvetica', 'bold');
    doc.text('Teléfono de Aclaraciones: 01-800-123-4567', 20, yPosition);
    yPosition += 10;

    // Guardamos el PDF
    doc.save('Detalle_Transaccion.pdf');
  }
}
