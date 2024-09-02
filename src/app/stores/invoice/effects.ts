import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  addItem,
  addItemFailure,
  addItemSuccess,
  deleteInvoice,
  LoadInvoice,
  LoadInvoiceFailure,
  LoadInvoiceSuccess
} from "./actions";
import {catchError, EMPTY, map, of, switchMap} from "rxjs";
import {InvoiceService} from "../../services/invoice/invoice.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class InvoiceEffect {
  actions$ = inject(Actions)
  service = inject(InvoiceService)
  http = inject(HttpClient);

  public loadInvoices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadInvoice),
      switchMap(() =>
        this.service.getInvoices().pipe(
          map(data => LoadInvoiceSuccess({invoice: data}))
        )),
      catchError(() => of(LoadInvoiceFailure))
    )
  )

  public addInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      switchMap(({ formData }) =>
        this.service.postInvoice(formData).pipe(
          map(() => LoadInvoice()),
          catchError(() => of(LoadInvoiceFailure()))
        )
      )
    )
  );

  deleteInvoice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteInvoice),
      switchMap(({ id }) =>
        this.service.deleteInvoice(id).pipe(
          map(() => {
            return { type: '[Invoice] Delete Invoice Success' };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
