import { Injectable } from '@angular/core';

const elements = [
  {
      id: 1,
      name: 'Apple',
      type: 'Fruit',
      mass: 400
  },
  {
      id: 2,
      name: 'Cucumber',
      type: 'Vegetable',
      mass: 150
  },
  {
      id: 3,
      name: 'Beef',
      type: 'Meat',
      mass: 750
  },
];

@Injectable()
export class ListService {

  private elements;

  constructor() {
    this.elements = elements;
  }

  getElements() {
    return this.elements;
  }

}
