import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  imageOptions = [
    '/assets/items-img/1up.jpg',
    '/assets/items-img/acorn.jpg',
    '/assets/items-img/star.jpg',
    '/assets/items-img/fireflower.jpg',
    '/assets/items-img/leaf.jpg',
    '/assets/items-img/turnip.jpg',
  ];

  
  itemForm = new FormGroup({
    titleCtrl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    descriptionCtrl: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
  });
  
  
  isSubmited: boolean;

  form = {
    id: -1,
    image: '',
    title: '',
    description: '',
  };

  @Input()
  item = {
    id: -1,
    image: '',
    title: '',
    description: '',
  };

  interval;
  @Output()

  saveResult = new EventEmitter<any>();


  @Output()
  cancelResult = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    this.form = Object.assign(this.form, this.item); //shallow copy
    if (!this.item.image) {
      this.startInterval();
    } else {
      this.interval = this.imageOptions.indexOf(this.form.image);
    }

  }


  miSubmitFunction() {
    this.isSubmited = true;
    if (this.itemForm.valid) {
      //llama al server y manda informacion
      alert('formulario valido yahooooo!');
    }
  }




  startInterval() {
    this.interval = setInterval(() => {
      let index = Math.floor(Math.random() * this.imageOptions.length);
      this.form.image = this.imageOptions[index];
    }, 110);
  }
  stopInterval() {
    clearInterval(this.interval);
    this.interval = this.imageOptions.indexOf(this.form.image);
  }

  save() {
    this.stopInterval();
    this.saveResult.emit(this.form);
    console.log('enviado', this.form);
  }

  prev() {
    clearInterval(this.interval);

    if (this.interval >= this.imageOptions.length - 1) {
      this.interval--;
    } else if (this.interval == 0) {
      this.interval = this.imageOptions.length -1;
    } else {
      this.interval--;
      
    }
    this.form.image = this.imageOptions[this.interval];
  }
  next() {
    clearInterval(this.interval);
    if (this.interval >= this.imageOptions.length - 1) {
      this.interval = 0;
    } else {
      this.interval++;
    }
    this.form.image = this.imageOptions[this.interval];
  }

  cancel() {
        this.cancelResult.emit(this.form);
        
  } 
 
}
