import { Component, OnInit } from '@angular/core';
import { list } from '../../../animations';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.scss'],
  animations: [
    list,
  ]
})
export class Menu4Component implements OnInit {

  items = [];

  constructor() {
    this.items = [];
  }

  pushItem() {
    this.items.push('Item');
  }

  removeItem() {
    this.items.pop();
  }

  ngOnInit() {
  }

}
