import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BodyStep, ItAllUsers } from '../interfaces/interfaces';
import { Documentacion } from '../interfaces/documentacion';
import { ItPersonaFisica } from '../interfaces/personaFisica';
import { ItDatosMedicos } from '../interfaces/datos_medicos';
import { ItPadecimiento } from '../interfaces/padecimientos';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor() {}
  //Evento de primer paso completado en form-cuidador
  private stepCompleteSource = new Subject<{ bodyStep: BodyStep }>();
  bodyStep$ = this.stepCompleteSource.asObservable();

  emitStepComplete(bodyStep: BodyStep) {
    this.stepCompleteSource.next({ bodyStep });
  }

  // Servicios Para obtención de la URL generada

  private downloadURLSubject = new Subject<Documentacion>();

  setDownloadURL(objDataDoc: Documentacion) {
    this.downloadURLSubject.next(objDataDoc);
  }

  getDownloadURL(): Observable<Documentacion> {
    return this.downloadURLSubject.asObservable();
  }

  //Servicios para emitir eventi en modulo-administrador:
  // private eventoSubject = new Subject<any>();
  private usuarioSubject: BehaviorSubject<ItAllUsers | undefined> =
    new BehaviorSubject<ItAllUsers | undefined>(undefined);

  recibirUsuario(): Observable<ItAllUsers | undefined> {
    return this.usuarioSubject.asObservable();
  }

  lanzarUsuario(usuario: ItAllUsers): void {
    this.usuarioSubject.next(usuario);
  }

  // lanzarUsuario(data: any) {
  // this.eventoSubject.next(data);
  //}

  //recibirUsuario() {
  // return this.eventoSubject.asObservable();
  // }

  //------------------- Evento para mandar persona -------------------------------
  private personaSubject = new BehaviorSubject<ItPersonaFisica | undefined>(
    undefined
  );

  lanzarPersona(persona: ItPersonaFisica | undefined): void {
    this.personaSubject.next(persona);
  }

  obtenerPersona(): Observable<ItPersonaFisica | undefined> {
    return this.personaSubject.asObservable();
  }

  //-------------------- Evento para mandar Datos Médicos------------------------
  private datosMedSubject = new BehaviorSubject<ItDatosMedicos | undefined>(
    undefined
  );
  lanzarDatosMedicos(datosMedicos: ItDatosMedicos | undefined): void {
    this.datosMedSubject.next(datosMedicos);
  }

  obtenerDatosMedicos(): Observable<ItDatosMedicos | undefined> {
    return this.datosMedSubject.asObservable();
  }

  //-------------------- Evento para mandar Padecimientos------------------------
  private padecimientosSubject = new BehaviorSubject<
    ItPadecimiento[] | undefined
  >(undefined);

  lanzarPadecimientos(padecimientos: ItPadecimiento[] | undefined): void {
    this.padecimientosSubject.next(padecimientos);
  }

  obtenerPadecimientos(): Observable<ItPadecimiento[] | undefined> {
    return this.padecimientosSubject.asObservable();
  }

  //-------------------- Evento para mandar Documentos------------------------
  private documentacionSubject = new BehaviorSubject<
    Documentacion[] | undefined
  >(undefined);

  lanzarDocumentos(documentos: Documentacion[] | undefined): void {
    this.documentacionSubject.next(documentos);
  }

  obtenerDocumentos(): Observable<Documentacion[] | undefined> {
    return this.documentacionSubject.asObservable();
  }
}
