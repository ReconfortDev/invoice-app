import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Store} from "@ngrx/store";
import {addItem} from "../../../stores/invoice/actions";


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  standalone: true,
  styleUrl: './item-list.component.css',
  imports: [CommonModule, ReactiveFormsModule]
})

export class ItemListComponent {
  items = [
    {
      name: 'Banner Design',
      quantity: 1,
      price: 300,
    },
    {
      name: 'Email Design',
      quantity: 3,
      price: 412,
    }];

  addressForm!: FormGroup;
  isItemFormActive = false;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.addressForm = this.fb.group({
      name: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  addItem() {
    if (this.addressForm.valid) {
      console.log('Form Submitted!', this.addressForm.value);
    }
  }

  toggleAddItem(){
    this.isItemFormActive = !this.isItemFormActive;
  }



}
