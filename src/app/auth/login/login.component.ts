import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.loading = true;

    const user = { usuario: this.email, contrasenia: this.password };
    const validacion = await this.authService.login(user);
    console.log('Validacion:', validacion);

    if (validacion) {
      const redirectUrl = this.authService.redirectUrl();
      console.log('Redirecting to:', redirectUrl);
      this.router.navigate([redirectUrl]);
      this.loading = false;
    } else {
      this.loading = false;
      alert('Invalid credentials');
    }
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
