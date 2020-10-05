// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-items',
//   templateUrl: './items.component.html',
//   styleUrls: ['./items.component.scss']
// })
// export class ItemsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit, SkipSelf } from '@angular/core';
import { ItemsService } from './../../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor(public miServicio: ItemsService) {}

  ngOnInit(): void {}

  addNewItem() {
    
    this.miServicio.listItems.push({
      id:
        this.miServicio.listItems.length > 0
          ? this.miServicio.listItems[this.miServicio.listItems.length - 1].id +
            1
          : 1,

      image: '',
      title: '', //Fire for flowers
      description: '',
    });
  }

  killChild(item) {
    //const index = this.listItems.indexOf(item); //creas una variable llamada index, para guardar ahi el id del item que  se va a matar
    //this.listItems.splice(index, 1); //matas el item (orden splice), un solo item, con el index indicado (o sea el id)
    const index = this.miServicio.listItems.findIndex((i) => i.id == item.id);
    //array.indexOf busca primitivos en arrays
    //array.findIndex permite buscar el indice con base en el resultado de una funcion
    this.miServicio.listItems.splice(index, 1);
  }
}
