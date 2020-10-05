import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})


export class ItemComponent implements OnInit {

  @Input()
  itemObj; //{id, title, description}

  @Output() //emiters
  autoKillEmit = new EventEmitter<any>();

  isEditing: boolean;

  constructor(private miServicio: ItemsService) { }

  ngOnInit(): void {
    if (this.itemObj.image) {
      this.isEditing = false;
    } else {
      this.isEditing = true;
    }
  }

  deleteItem() {
    this.autoKillEmit.emit(this.itemObj);
  }

  savedItem(formValue) {

    this.miServicio.setItem(formValue);
    this.isEditing = false;
  }

  cancelItem(formValue) {
    this.deleteItem();

  }

  editItem() {
    this.isEditing = true;
  }


  viewDetails() {
    this.miServicio.selectedItem = this.itemObj;
  }



}
