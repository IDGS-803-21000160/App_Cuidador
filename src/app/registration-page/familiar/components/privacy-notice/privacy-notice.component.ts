import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-notice',
  templateUrl: './privacy-notice.component.html',
  styleUrl: './privacy-notice.component.css',
})
export class PrivacyNoticeComponent {
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

  constructor(private router: Router) {}
  gotoRequariments() {
    this.router.navigate(['/homePageCuidador/formFamiliar/requeriments']);
  }
}
