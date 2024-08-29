import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
  showFilter: boolean = false;
  hoverFilter: string | null = null;
  filterForm: FormGroup;

  constructor(private fb:FormBuilder,
    private invoiceOps: InvoiceOpsFacadeService) {
      this.filterForm = this.fb.group({
        Draft: [true],
        Pending: [true] ,
        Paid: [true],
      })

      this.filterForm.valueChanges.subscribe( values => {
        const selectedStatuses = Object.keys(values).filter( key => values[key])
        this.invoiceOps.filterInvoices(selectedStatuses)
      })
  }

  showFilters() {
    this.showFilter = !this.showFilter;
  }


}
