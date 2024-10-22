import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalNavbarComponent } from './global-components/global-navbar/global-navbar.component';
import { InfoRolsComponent } from './global-components/info-rols/info-rols.component';
import { CuidadorModule } from './cuidador/cuidador.module';
import { LoginModule } from './login/login.module';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    GlobalNavbarComponent,
    InfoRolsComponent,
    CuidadorModule,
    LoginModule,
  ],
})
export class AppComponent {
  title = 'CuidadorWeb';
}
