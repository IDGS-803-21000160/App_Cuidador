import { Component, EventEmitter, Output } from '@angular/core';
import { EventServiceService } from '../../services/event-service.service';
import { BodyStep } from '../../interfaces/interfaces';

@Component({
  selector: 'app-info-privacy-notice',
  templateUrl: './info-privacy-notice.component.html',
  styleUrl: './info-privacy-notice.component.css',
})
export class InfoPrivacyNoticeComponent {
  @Output() stepEvent = new EventEmitter<{ stepComplete: boolean }>();

  constructor(private eventService: EventServiceService) {}

  emitStepComplete() {
    const bodyStep: BodyStep = {
      step: 'privacyNotice',
      statusStep: true,
    };
    this.eventService.emitStepComplete(bodyStep);
  }

  checkBox(event: Event) {
    const checkElement = event.target as HTMLInputElement;
    const button = document.getElementById('nexStep') as HTMLInputElement;
    console.log(checkElement.checked);

    if (checkElement.checked === true) {
      button.classList.remove('buttonDisabled');
      button.classList.remove('cursor-not-allowed');
      button.classList.add('buttonConfirm');
      button.removeAttribute('disabled');
    } else {
      button.classList.add('buttonDisabled');
      button.classList.add('cursor-not-allowed');
      button.classList.remove('buttonConfirm');
      button.setAttribute('disabled', '');
    }
  }
}
