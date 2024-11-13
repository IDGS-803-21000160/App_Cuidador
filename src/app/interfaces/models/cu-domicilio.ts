export interface ItDomicilio {
  idDomicilio: number;
  calle: string;
  colonia: string;
  numeroInterior: string;
  numeroExterior: string;
  ciudad: string;
  estado: string;
  pais: string;
  referencias: string;
  estatusId?: number;
  fechaRegistro?: Date;
  usuarioRegistro?: number;
  fechaModificacion?: Date;
  usuarioModifico?: number;
}
