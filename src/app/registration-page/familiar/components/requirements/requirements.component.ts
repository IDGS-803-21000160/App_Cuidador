import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrl: './requirements.component.css',
})
export class RequirementsComponent {
  constructor(private router: Router) {}
  goToForm() {
    this.router.navigate(['/homePageCuidador/formFamiliar/form']);
  }
}
