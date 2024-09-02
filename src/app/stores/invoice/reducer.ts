import {createReducer, on} from "@ngrx/store"
import {
  addItem, addItemFailure, addItemSuccess, deleteInvoice,
  LoadInvoice,
  LoadInvoiceFailure,
  LoadInvoiceSuccess, updateInvoice,
} from "./actions"
import {InvoiceProps} from "../../models/invoice.model";


export interface InvoiceState {
  invoices: InvoiceProps[],
  error: string | null;
  loading: boolean;

}

const initialState: InvoiceState = {
  invoices: [],
  error: null,
  loading: false,
}

export const reducer = createReducer(
  initialState,
  on(LoadInvoice, state => {
    return {
      ...state
    }
  }),
  on(LoadInvoiceSuccess, (state, {invoice}) => {
    return {
      ...state,
      invoices: invoice
    }
  }),
  on(LoadInvoiceFailure, state => {
    return {
      ...state
    }
  }),
  on(addItem, (state) => ({...state, loading: true})),
  on(addItemSuccess, (state) => ({...state, loading: false, error: null})),
  on(addItemFailure, (state, {error}) => ({...state, loading: false, error})),

  on(deleteInvoice, (state, {id}) => ({
    ...state,
    invoices: state.invoices.filter(invoice => invoice.id !== id)
  })),

  on(updateInvoice, (state, {id, changes}) => {
    const updatedInvoices = state.invoices.map(invoice =>
      invoice.id === id ? {...invoice, ...changes} : invoice
    );
    return {...state, invoices: updatedInvoices};
  })
)
