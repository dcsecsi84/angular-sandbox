import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Element } from '../model/model';

@Component({
  selector: 'app-list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  elements: Element[];
  selectedElement: Element;

  constructor(private listService: ListService) {
    this.elements = this.listService.getElements();
  }

  ngOnInit() {
  }

  onSelect(element: Element) { this.selectedElement = element; }

}
