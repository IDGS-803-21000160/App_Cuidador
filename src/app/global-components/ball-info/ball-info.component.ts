import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ball-info',
  standalone: true,
  imports: [],
  templateUrl: './ball-info.component.html',
  styleUrl: './ball-info.component.css',
})
export class BallInfoComponent {
  @Input() textInfo: string[] = [];
}
