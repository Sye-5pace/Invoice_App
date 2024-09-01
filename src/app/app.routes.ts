import { Routes } from '@angular/router';
import { InvoicesPageComponent } from './views/invoices-page/invoices-page.component';

export const routes: Routes = [
  { path: 'invoice-detail/:id',
    loadComponent: () =>
    import ('../app/views/invoice-detail-page/invoice-detail-page.component')
    .then((m) => m.InvoiceDetailPageComponent )
  },
  {path: '**',component: InvoicesPageComponent}
];
