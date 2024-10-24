import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GlobalNavbarComponent } from './global-components/global-navbar/global-navbar.component';
import { InfoRolsComponent } from './global-components/info-rols/info-rols.component';
import { CuidadorModule } from './cuidador/cuidador.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleCuidadorModule } from './module-cuidador/module-cuidador.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { Persona } from './interfaces/interfaceCuidador';
import { ItPersonaFisica } from './interfaces/personaFisica';

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
  ],
})
export class AppComponent {
  title = 'CuidadorWeb';

  //Funciones Usadas de forma Global
}
