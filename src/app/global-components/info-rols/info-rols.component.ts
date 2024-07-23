import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-rols',
  standalone: true,
  imports: [],
  templateUrl: './info-rols.component.html',
  styleUrl: './info-rols.component.css',
})
export class InfoRolsComponent {
  //Aumentar
  @Output() up = new EventEmitter<number>();
  //Disminuir
  @Output() down = new EventEmitter<void>();

  contador: number = 0;

  contadorUp() {
    this.contador++;
    this.up.emit(this.contador);
  }

  contadorDown() {
    this.contador--;
    this.up.emit(this.contador);
  }
}
