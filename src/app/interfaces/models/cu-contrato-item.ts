export interface ItContratoItem {
  idContratoItem: number;
  contratoId: number;
  estatusId: number;
  observaciones: string;
  horarioInicioPropuesto: Date;
  horarioFinPropuesto: Date;
  fechaAceptacion?: Date;
  fechaInicioCuidado?: Date;
  fechaFinCuidado?: Date;
  importeTotal?: number;
}
