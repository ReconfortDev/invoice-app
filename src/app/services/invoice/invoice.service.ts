import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  http = inject(HttpClient)
  url = 'http://localhost:3000/data'

  getInvoices(){
    return this.http.get(this.url)
  }

  postInvoice(invoice: any) {
    return this.http.post<any>(this.url, invoice);
  }

  deleteInvoice(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
