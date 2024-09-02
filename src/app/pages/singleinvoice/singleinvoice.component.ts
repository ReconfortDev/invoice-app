import {Component, OnInit} from '@angular/core';
import {LeftModalComponent} from "../../components/modals/left-modal/left-modal.component";
import {NewInvoiceFormComponent} from "../../components/form/new-invoice-form/new-invoice-form.component";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {map, Observable, switchMap} from "rxjs";
import {InvoiceProps} from "../../models/invoice.model";
import {AppState, invoiceSelector} from "../../stores/invoice/selectors";
import {Store} from "@ngrx/store";
import {AsyncPipe, DecimalPipe, NgForOf, NgIf, NgStyle} from "@angular/common";
import {deleteInvoice, updateInvoice} from "../../stores/invoice/actions";
import {InvoiceService} from "../../services/invoice/invoice.service";

@Component({
  selector: 'app-singleinvoice',
  templateUrl: './singleinvoice.component.html',
  standalone: true,
  imports: [
    LeftModalComponent,
    NewInvoiceFormComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
    NgForOf,
    DecimalPipe,
    NgStyle
  ],
  styleUrl: './singleinvoice.component.css'
})
export class SingleinvoiceComponent implements OnInit {
  isModalOpened = false;
  invoice$!: Observable<InvoiceProps | undefined>;

  constructor(
    private route: ActivatedRoute, private store: Store<AppState>, private invoiceService: InvoiceService , private router: Router,) {}

  ngOnInit(): void {
    this.invoice$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id =>
        this.store.select(invoiceSelector).pipe(
          map(invoices => invoices.find(invoice => invoice.id === id))
        )
      )
    );
  }

  getStatusColor(status: "paid" | "pending" | "draft" | undefined): string {
    switch (status) {
      case 'paid':
        return '#00FF00';
      case 'pending':
        return '#FFA500';
      case 'draft':
        return '#808080';
      default:
        return '#FFFFFF';
    }
  }

  toggleModal(){
    this.isModalOpened = !this.isModalOpened;
  }



  onDeleteInvoice(invoiceId: string): void {
    if (confirm('Are you sure you want to delete this invoice?')) {
      this.invoiceService.deleteInvoice(invoiceId).subscribe({
        next: () => {
          this.store.dispatch(deleteInvoice({ id: invoiceId }));
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Delete failed', err);
        }
      });
    }
  }

  markAsPaid(invoiceId: string): void {
    if (confirm('Are you sure you want to mark this invoice as paid?')) {
      this.store.dispatch(updateInvoice({ id: invoiceId, changes: { status: 'paid' } }));
    }
  }
}
