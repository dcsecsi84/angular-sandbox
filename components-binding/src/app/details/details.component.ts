import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../model/model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  element: Element;

  constructor() { }

  ngOnInit() {
  }

}
