import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    const user = { usuario: this.email, contrasenia: this.password };
    const validacion = await this.authService.login(user);
    console.log('Validacion:', validacion);

    if (validacion) {
      const redirectUrl = this.authService.redirectUrl();
      console.log('Redirecting to:', redirectUrl);
      this.router.navigate([redirectUrl]);
    } else {
      alert('Invalid credentials');
    }
  }

  cerrarSesion() {
    this.authService.logout();
  }
}
