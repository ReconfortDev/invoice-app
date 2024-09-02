import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {ItemListComponent} from "../item-list/item-list.component";
import {Store} from "@ngrx/store";
import {addItem} from "../../../stores/invoice/actions";

@Component({
  selector: 'app-new-invoice-form',
  templateUrl: './new-invoice-form.component.html',
  standalone: true,
  styleUrl: './new-invoice-form.component.css',
  imports: [CommonModule, ReactiveFormsModule, ItemListComponent]
})
export class NewInvoiceFormComponent {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
  }

  createForm() {
    this.addressForm = this.fb.group({
      street: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required]],
      county: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      clientName: ['', [Validators.required]],
      clientEmail: ['', [Validators.required, Validators.email]],
      clientAddress: ['', [Validators.required]],
      clientCity: ['', [Validators.required]],
      clientCountry: ['', [Validators.required]],
      clientPostalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      paymentDue: ['', [Validators.required]],
      paymentTerms: ['', [Validators.required]],
      projectDescription: ['', [Validators.required]],
      status: ['pending'],
      total: '125',
    });
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const formData = this.addressForm.value;
      this.store.dispatch(addItem({ formData }));
      console.log('Form Submitted!', this.addressForm.value);
    }
  }

  saveAsDraft() {
    if (this.addressForm.valid) {
      this.addressForm.patchValue({ status: 'draft' });
      const formData = this.addressForm.value;
      this.store.dispatch(addItem({ formData }));
      console.log('Form Saved as Draft!', this.addressForm.value);
    }
  }
}
