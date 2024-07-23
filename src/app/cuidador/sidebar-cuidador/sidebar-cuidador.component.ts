import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-sidebar-cuidador',
  templateUrl: './sidebar-cuidador.component.html',
  styleUrl: './sidebar-cuidador.component.css',
})
export class SidebarCuidadorComponent {
  private subscription?: Subscription;

  constructor(private eventsService: EventServiceService) {
    this.subscription = this.eventsService.bodyStep$.subscribe((event) => {
      console.log('Step:', event.bodyStep.step);
      const secondStep = document.getElementById('requisitos') as HTMLElement;
      const thirdStep = document.getElementById('formulario') as HTMLElement;

      if (event.bodyStep.step === 'privacyNotice') {
        secondStep.classList.add('stepComplete');
        secondStep.classList.add('text-white');
      }

      if (event.bodyStep.step === 'form') {
        thirdStep.classList.add('stepComplete');
        thirdStep.classList.add('text-white');
      }
    });
  }
}
