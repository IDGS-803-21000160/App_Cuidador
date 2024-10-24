import { Component } from '@angular/core';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrl: './page-principal.component.css',
})
export class PagePrincipalComponent {
  menuItems = [
    {
      routerLink: ['/cuidador/home'],
      svgViewBox: '0 0 24 24',
      svgFill: 'currentColor',
      svgPaths: [
        'M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z',
      ],
      text: 'Inicio',
      notification: false,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      routerLink: ['/'],
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
      routerLink: ['/cuidador/profile'],
      svgViewBox: '0 0 24 24',
      svgFill: 'currentColor',
      svgPaths: [
        'M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z',
      ],
      text: 'Perfil',
      notification: false,
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      routerLink: ['/'],
      svgViewBox: '0 0 24 24',
      svgFill: 'currentColor',
      svgPaths: [
        'M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z',
      ],
      text: 'Configuración',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
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
