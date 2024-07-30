import { Component, EventEmitter, Output } from '@angular/core';
import { InfoAdultomayorComponent } from '../infoRoles/info-adultomayor/info-adultomayor.component';

@Component({
  selector: 'app-page-initial',
  templateUrl: './page-initial.component.html',
  styleUrl: './page-initial.component.css',
})
export class PageInitialComponent {
  //Aumentar
  @Output() up = new EventEmitter<number>();
  //Disminuir
  @Output() down = new EventEmitter<void>();

  contador: number = 0;

  //contadorUp() {
  //this.contador++;
  //console.log(this.contador);

  //this.up.emit(this.contador);
  // }

  //contadorDown() {
  //this.contador--;
  //this.up.emit(this.contador);
  // }

  activeButtonIndex: number = 0;

  contadorUp() {
    if (this.activeButtonIndex > 0) {
      this.activeButtonIndex--;
    }
  }

  contadorDown() {
    if (this.activeButtonIndex < 3) {
      // Ajusta el número según la cantidad de botones
      this.activeButtonIndex++;
    }
  }
}
