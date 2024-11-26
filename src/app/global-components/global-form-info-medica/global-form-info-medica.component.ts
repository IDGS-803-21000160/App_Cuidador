import { Component, OnInit } from '@angular/core';
import { InfoMedicaService } from '../../services/global-services/info-medica.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-global-form-info-medica',
  standalone: true,
  imports: [],
  templateUrl: './global-form-info-medica.component.html',
  styleUrl: './global-form-info-medica.component.css',
})
export class GlobalFormInfoMedicaComponent implements OnInit {
  infoMedica: any;
  spinerState: boolean = true;

  constructor(
    private infoMedicaService: InfoMedicaService,
    private currentUser: AuthService
  ) {}

  ngOnInit(): void {
    const currentUser = this.currentUser.getCurrentUser();
    console.log('Current user is: ', currentUser);

    const idUsuario = currentUser.user.idUsuario;

    this.infoMedicaService.getInfoMedica(idUsuario).subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          if (response.length === 1) {
            this.infoMedica = response[0];
          } else {
            this.infoMedica = response.find((item) => item.esFamiliar === 1);
          }
          console.log('Your medical info is: ', this.infoMedica);
        }
        this.spinerState = false;
      },
      (error) => {
        console.error('Error fetching medical info:', error);
        this.spinerState = false;
      }
    );
  }
}
