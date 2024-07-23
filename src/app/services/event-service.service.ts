import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BodyStep } from '../interfaces/interfaces';
import { Documentacion } from '../interfaces/documentacion';

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
}
