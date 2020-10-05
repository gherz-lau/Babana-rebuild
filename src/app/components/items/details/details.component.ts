import { Component, OnInit, Input } from '@angular/core';

//nuevos para los servicios

import { ItemsService } from 'src/app/services/items.service';

import { ActivatedRoute } from '@angular/router';

//import { editItem } from 'src/app/components/main-container/item.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})



export class DetailsComponent implements OnInit {
 @Input() //esto es un decorador que indica que recibe un parametro

  itemObj

  isEditing: boolean;

  constructor(private miServicio: ItemsService, private route: ActivatedRoute) {

  
  }

  ngOnInit(): void {  }

  skip() {

    this.miServicio.selectedItem = null;
    
  }

  savedItem(formValue) {

    this.miServicio.setItem(formValue);
    this.isEditing = false;
    this.skip();
  }
 
  editItem() {
    this.isEditing = true;
  }

  cancelItem(formValue) {
    this.skip();

  }

}
