import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  listItems = [
    {
      id: 1, //hay que asignarles un ID, para saber quien es el que se quiere suicidar
      image: '/assets/items-img/turnip.jpg',
      title: 'Turnip',
      description: 'Arrojable',
    },
  ];

  selectedItem;
  constructor() { }

  setItem(newItem) {
    /*
        Que tengo
        que necesito
        como lo consigo
    */
    let index = this.listItems.findIndex((i) => i.id == newItem.id);
    this.listItems[index] = newItem;
  }
  getItem(id) {
    let index = this.listItems.findIndex((i) => i.id == id);
    return this.listItems[index];
  }



}
