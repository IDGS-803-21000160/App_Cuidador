import { Component } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-familiar-tabs',
  templateUrl: './familiar-tabs.component.html',
  styleUrl: './familiar-tabs.component.css',
})
export class FamiliarTabsComponent {
  fotoProfile: string = '';
  currentUser: any;
  activeTab: string = 'dashboard';

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.getCurrentUser();
  }

  navigateInfoPersonal() {
    const persona = {
      nombre: 'Jose Chong',
    };

    this.router.navigate(['/familiar/profile/infoPersonal'], {
      state: { data: { persona: { id: 3, nombre: 'John Doe' } } },
    });
  }
}
