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
    const user = { email: this.email, password: this.password };
    const validacion = await this.authService.login(user);
    if (validacion) {
      const redirectUrl = this.authService.redirectUrl();
      console.log('Redirecting to:', redirectUrl);
      this.router.navigate([redirectUrl]);
    } else {
      alert('Invalid credentials');
    }
  }
}
