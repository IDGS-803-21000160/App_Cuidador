import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';

@Component({
  selector: 'app-navbar-finance',
  templateUrl: './navbar-finance.component.html',
  styleUrl: './navbar-finance.component.css',
})
export class NavbarFinanceComponent implements OnInit {
  constructor(private currentUser: AuthService) {}

  ngOnInit() {
    console.log('Hola a todes', this.currentUser.getCurrentUser());
  }
}
