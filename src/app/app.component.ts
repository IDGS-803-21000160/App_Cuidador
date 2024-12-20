import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalNavbarComponent } from './global-components/global-navbar/global-navbar.component';
import { InfoRolsComponent } from './global-components/info-rols/info-rols.component';
import { CuidadorModule } from './cuidador/cuidador.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleCuidadorModule } from './modules/module-cliente-cuidador/module-cuidador/module-cuidador.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { Persona } from './interfaces/interfaceCuidador';
import { ItPersonaFisica } from './interfaces/personaFisica';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    GlobalNavbarComponent,
    InfoRolsComponent,
    CuidadorModule,
    LoginModule,
    ModuleCuidadorModule,
    AuthModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
  ],
})
export class AppComponent {
  title = 'CuidadorWeb';

  //Funciones Usadas de forma Global
}
