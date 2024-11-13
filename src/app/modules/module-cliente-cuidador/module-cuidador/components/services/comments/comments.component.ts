import { Component } from '@angular/core';
import { ServicesServicesService } from '../../../../../../services/services-cliente-cuidador/services-services/services-services.service';
import { AuthService } from '../../../../../../auth/auth.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  comments: any[] = [];

  constructor(
    private serviceServices: ServicesServicesService,
    private currentUser: AuthService
  ) {}

  ngOnInit() {
    this.serviceServices
      .getComentariosCuidador(this.currentUser.getCurrentUser().user.idUsuario)
      .subscribe((data) => {
        this.comments = data;
        console.log('Yo soy los comentario', data);
      });
  }

  getStarsArray(calificacion: number): boolean[] {
    const stars = Array(5).fill(false);
    for (let i = 0; i < calificacion && i < 5; i++) {
      stars[i] = true;
    }
    return stars;
  }
}
