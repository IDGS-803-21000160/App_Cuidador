import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-form-familar',
  templateUrl: './form-familar.component.html',
  styleUrl: './form-familar.component.css',
})
export class FormFamilarComponent {
  private subscription?: Subscription;
  componentRender: string = 'formFam';

  constructor(private eventsService: EventServiceService) {
    this.subscription = this.eventsService.bodyStep$.subscribe((event) => {
      console.log('Step Fam:', event.bodyStep.step);
      console.log('Statu Step:', event.bodyStep.statusStep);

      this.componentRender = event.bodyStep.step;
    });
  }
}
