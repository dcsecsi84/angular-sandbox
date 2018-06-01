import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {

  selectedDate = new Date();
  minDate = new Date(2018, 0, 1);
  maxDate = new Date(2020, 12, 31);

  constructor() { }

  ngOnInit() {
  }

}
