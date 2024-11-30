import { Component, OnInit } from '@angular/core';
import { InfoMedicaService } from '../../services/global-services/info-medica.service';
import { AuthService } from '../../auth/auth.service';
import { SpinnerNotShadowComponent } from '../spinner-not-shadow/spinner-not-shadow.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-global-form-info-medica',
  standalone: true,
  imports: [SpinnerNotShadowComponent, CommonModule, FormsModule],
  templateUrl: './global-form-info-medica.component.html',
  styleUrl: './global-form-info-medica.component.css',
})
export class GlobalFormInfoMedicaComponent implements OnInit {
  infoMedica: any;
  spinerState: boolean = true;
  padecimientos: any[] = [];
  listaAlergias: string[] = [];

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
        console.log('Your medical info is: ', response);
        this.infoMedica = response;
        this.listaAlergias = this.infoMedica.alergias.split(',');
        this.padecimientos = [...this.infoMedica.padecimientos];
        this.spinerState = false;
      },
      (error) => {
        console.error('Error fetching medical info:', error);
        this.spinerState = true;
      }
    );
  }
}
