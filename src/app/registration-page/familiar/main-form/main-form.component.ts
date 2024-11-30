import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css',
})
export class MainFormComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Add your logic to apply styles here
        console.log('Navigation ended:', event.url);
        if (event.url === '/homePageCuidador/formFamiliar/requeriments') {
          const requisitosDiv = document.getElementById('requisitos');
          const textoRequisitos = document.getElementById('titleRequisitos');
          if (requisitosDiv) {
            requisitosDiv.classList.add('stepComplete');
            textoRequisitos?.classList.add('text-white');
          }
        } else if (event.url === '/homePageCuidador/formFamiliar/form') {
          const formularioDiv = document.getElementById('formulario');
          const textoFormulario = document.getElementById('titleForm');
          if (formularioDiv) {
            formularioDiv.classList.add('stepComplete');
            textoFormulario?.classList.add('text-white');
          }
        }
      }
    });
  }
}
