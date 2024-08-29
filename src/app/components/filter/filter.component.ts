import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { ThemeService } from '../../services/theme.service';

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
  themeMode: boolean= false;

  constructor(private fb:FormBuilder,
    private themeService:ThemeService
    ,private invoiceOps: InvoiceOpsFacadeService) {
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

  ngOnInit(){
    this.themeService.mode$?.subscribe( mode => this.themeMode = mode );
  }

  showFilters() {
    this.showFilter = !this.showFilter;
  }


}
