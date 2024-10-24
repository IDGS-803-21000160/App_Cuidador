import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-global-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './global-navbar.component.html',
  styleUrl: './global-navbar.component.css',
})
export class GlobalNavbarComponent {}
