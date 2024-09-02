import {createFeatureSelector, createSelector} from "@ngrx/store";
import { InvoiceState } from "./reducer";

export interface AppState {
    invoice: InvoiceState
}

const selectInvoiceFeature = createFeatureSelector<AppState, InvoiceState>('invoice');

const selectInvoice = ((state: AppState ) => state.invoice)

export const invoiceSelector = createSelector(
  selectInvoiceFeature,
  (state: InvoiceState) => state.invoices
);

export const selectError = createSelector(
  selectInvoice,
  (state: any) => state.error
);

export const selectLoading = createSelector(
  selectInvoice,
  (state: any) => state.loading
);
