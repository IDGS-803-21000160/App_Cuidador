import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pageadmin-principal',
  templateUrl: './pageadmin-principal.component.html',
  styleUrl: './pageadmin-principal.component.css',
})
export class PageadminPrincipalComponent {
  menuItems = [
    {
      routerLink: ['/administrador/dashboard'],
      svgViewBox: '0 0 22 21',
      svgFill: 'currentColor',
      svgPaths: [
        'M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z',
        'M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z',
      ],
      text: 'Dashboard',
      notification: false,
    },
    {
      routerLink: ['/administrador/solicitudes'],
      svgViewBox: '0 0 20 20',
      svgFill: 'currentColor',
      svgPaths: [
        'm17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z',
      ],
      text: 'Solicitudes',
      notification: true,
      numNotificaciones: 2,
    },
    {
      routerLink: ['/homePageCuidador/login'],
      svgViewBox: '0 0 20 18',
      svgFill: 'currentColor',
      svgPaths: [
        'M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z',
      ],
      text: 'Usuarios',
      notification: false,
    },
  ];
  sidebarVisible = false;
  dropdownVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
