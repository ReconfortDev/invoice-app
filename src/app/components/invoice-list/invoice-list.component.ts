import {Component, Input} from '@angular/core';
import {InvoiceProps} from "../../models/invoice.model";
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  standalone: true,
  styleUrl: './invoice-list.component.css',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class InvoiceListComponent{
  @Input() invoice: InvoiceProps | null = null;

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
}
