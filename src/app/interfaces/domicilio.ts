export interface ItDomicilio {
  id_domicilio: number;
  calle: string;
  colonia: string;
  numero_interior: string;
  numero_exterior: string;
  ciudad: string;
  estado: string;
  pais: string;
  referencias: string;
  estatus_id: number;
  fecha_registro: Date;
  usuario_registro: number;
  fecha_modificacion: Date;
  usuario_modifico: number;
}
