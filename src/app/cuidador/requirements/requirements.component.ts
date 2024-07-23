import { Component, EventEmitter, Output } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { BodyStep } from '../../interfaces/interfaces';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.css',
})
export class RequirementsComponent {
  @Output() stepEvent = new EventEmitter<{ stepComplete: boolean }>();

  constructor(private eventService: EventServiceService) {}

  emitStepComplete() {
    const bodyStep: BodyStep = {
      step: 'form',
      statusStep: true,
    };
    this.eventService.emitStepComplete(bodyStep);
  }
}
