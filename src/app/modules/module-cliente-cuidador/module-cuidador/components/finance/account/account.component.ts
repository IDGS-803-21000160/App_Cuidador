import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../../auth/auth.service';
import { FinanceServicesService } from '../../../../../../services/services-cliente-cuidador/finance-services/finance-services.service';
import { SidebarCuidadorComponent } from '../../../../../../cuidador/sidebar-cuidador/sidebar-cuidador.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  isModalOpen = false;
  isLoading = false; // Variable para controlar el estado de carga

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(
    private currentUser: AuthService,
    private finanzasService: FinanceServicesService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.finanzasService
      .getFinanzasUsuarioCuidador(
        this.currentUser.getCurrentUser().user.idUsuario
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.isLoading = false;
        },
        (error) => {
          console.error(error);
          this.isLoading = false;
        }
      );
  }
}
