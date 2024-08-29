import {  createEntityAdapter } from '@ngrx/entity';
import { IInvoice } from '../../invoices';



export const invoiceAdapter = createEntityAdapter<IInvoice>({
  selectId: (invoice: IInvoice) => invoice.id,
  sortComparer: (a: IInvoice, b: IInvoice) => b.createdAt.localeCompare(a.createdAt)
});

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = invoiceAdapter.getSelectors()
export { IInvoice };

