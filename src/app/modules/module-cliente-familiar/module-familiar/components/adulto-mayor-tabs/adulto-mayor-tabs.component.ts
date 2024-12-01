import { Component } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adulto-mayor-tabs',
  templateUrl: './adulto-mayor-tabs.component.html',
  styleUrl: './adulto-mayor-tabs.component.css',
})
export class AdultoMayorTabsComponent {
  imgPerfil: string | undefined = '';
  nameCuidador: string | undefined = '';
  userName: string | undefined = '';
  currentUser: any;
  activeTab: string = 'dashboard';
  fotoProfile: string = '';
  showFirstDiv = false;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = this.authService.getCurrentUser();
  }
  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
