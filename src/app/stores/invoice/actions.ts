import { createAction, props } from "@ngrx/store";
import {InvoiceProps} from "../../models/invoice.model";

export const LoadInvoice = createAction('[INVOICE] load invoice')
export const LoadInvoiceSuccess = createAction('[INVOICE] load success', props<{invoice: any}>())
export const LoadInvoiceFailure = createAction('[INVOICE] load failure')

export const addItem = createAction('[Item] Add Item', props<{ formData: any }>());
export const addItemSuccess = createAction('[Item] Add Item Success');
export const addItemFailure = createAction('[Item] Add Item Failure', props<{ error: any }>());
export const deleteInvoice = createAction('[Invoice] Delete Invoice', props<{ id: string }>());
export const updateInvoice = createAction('[Invoice] Update Invoice', props<{ id: string; changes: Partial<InvoiceProps> }>());
