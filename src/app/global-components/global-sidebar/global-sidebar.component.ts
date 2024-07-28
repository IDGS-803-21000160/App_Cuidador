import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-global-sidebar',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './global-sidebar.component.html',
  styleUrl: './global-sidebar.component.css',
})
export class GlobalSidebarComponent {
  @Input() menuItems: Array<any> = [];
  @Input() menuItemsProfile: Array<any> = [];

  sidebarVisible = false;
  dropdownVisible = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
