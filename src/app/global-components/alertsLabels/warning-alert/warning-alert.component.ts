import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  standalone: true,
  imports: [],
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css',
})
export class WarningAlertComponent {
  @Input() message: string = '';
}
