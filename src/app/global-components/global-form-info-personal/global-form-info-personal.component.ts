import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { PersonaService } from '../../services/global-services/persona.service';
import { SpinnerNotShadowComponent } from '../spinner-not-shadow/spinner-not-shadow.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

@Component({
  selector: 'app-global-form-info-personal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SpinnerNotShadowComponent,
    ErrorPageComponent,
  ],
  templateUrl: './global-form-info-personal.component.html',
  styleUrl: './global-form-info-personal.component.css',
})
export class GlobalFormInfoPersonalComponent implements OnInit {
  persona: any;
  spinerState: boolean = true;

  constructor(
    private router: Router,
    private currenUser: AuthService,
    private servicePerson: PersonaService
  ) {}

  ngOnInit(): void {
    const currentUser = this.currenUser.getCurrentUser();
    console.log('Current user is: ', currentUser);

    const idUsuario = currentUser.user.idUsuario;

    this.servicePerson.getPersona(idUsuario).subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          if (response.length === 1) {
            this.persona = response[0];
          } else {
            this.persona = response.find((item) => item.esFamiliar === 1);
          }
          console.log('Your personal info is: ', this.persona);
        }
        this.spinerState = false;
      },
      (error) => {
        console.error('Error fetching persona:', error);
        this.spinerState = false;
      }
    );
  }
}
