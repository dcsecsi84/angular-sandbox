import { Component, OnInit } from '@angular/core';
import { stateAnim } from '../../../animations';

@Component({
  selector: 'app-menu5',
  templateUrl: './menu5.component.html',
  styleUrls: ['./menu5.component.scss'],
  animations: [
    stateAnim
  ]
})
export class Menu5Component implements OnInit {

  state = 'small';

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  constructor() { }

  ngOnInit() {
  }

}
