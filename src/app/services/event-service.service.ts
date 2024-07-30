import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BodyStep } from '../interfaces/interfaces';
import { Documentacion } from '../interfaces/documentacion';
import { ItPersonaFisica } from '../interfaces/personaFisica';

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
  private eventoSubject = new Subject<any>();

  lanzarUsuario(data: any) {
    this.eventoSubject.next(data);
  }

  recibirUsuario() {
    return this.eventoSubject.asObservable();
  }

  //Evento para mandar persona
  private eventPersona = new Subject<ItPersonaFisica>();

  lanzarPersona(persona: any) {
    this.eventPersona.next(persona);
  }

  obtenerPersona() {
    return this.eventPersona.asObservable();
  }
}
