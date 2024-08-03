import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-form-cuidador',
  templateUrl: './form-cuidador.component.html',
  styleUrl: './form-cuidador.component.css',
})
export class FormCuidadorComponent {
  private subscription?: Subscription;
  componentRender: string = 'form';

  constructor(private eventsService: EventServiceService) {
    this.subscription = this.eventsService.bodyStep$.subscribe((event) => {
      console.log('Step:', event.bodyStep.step);
      console.log('Statu Step:', event.bodyStep.statusStep);

      this.componentRender = event.bodyStep.step;
    });
  }
}
