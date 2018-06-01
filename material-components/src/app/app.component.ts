import { Component } from '@angular/core';
import { RoutAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RoutAnimation]
})
export class AppComponent {
  title = 'app';
}
