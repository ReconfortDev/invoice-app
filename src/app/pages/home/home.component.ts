import {Component, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AsyncPipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {InvoiceListComponent} from "../../components/invoice-list/invoice-list.component";
import {LeftModalComponent} from "../../components/modals/left-modal/left-modal.component";
import {NewInvoiceFormComponent} from "../../components/form/new-invoice-form/new-invoice-form.component";
import {Observable} from "rxjs";
import {InvoiceProps} from "../../models/invoice.model";
import {invoiceSelector} from "../../stores/invoice/selectors";
import {LoadInvoice} from "../../stores/invoice/actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    InvoiceListComponent,
    NgIf,
    LeftModalComponent,
    NewInvoiceFormComponent,
    NgForOf
  ],
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  store = inject(Store)
  invoices$: Observable<InvoiceProps[]>= this.store.select(invoiceSelector)


  ngOnInit(){
    this.store.dispatch(LoadInvoice())
  }

  filterOpened = false;
  isModalOpened = false;

  toggleFilter() {
    this.filterOpened = !this.filterOpened;
  }

  toggleModal() {
    this.isModalOpened = !this.isModalOpened;
  }

}
