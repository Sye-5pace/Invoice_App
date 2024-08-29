import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvoiceOpsFacadeService } from '../../services/invoice-ops-facade.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  showFilter: boolean = false;
  hoverFilter: string | null = null;
  themeMode: boolean= false;
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private themeService: ThemeService,
    private invoiceOps: InvoiceOpsFacadeService
  ) {
    // Initialize the form group with default checkbox values
    this.filterForm = this.fb.group({
      Draft: [false],
      Pending: [false],
      Paid: [false]
    });
  }

  ngOnInit() {
    this.themeService.mode$?.subscribe(mode => (this.themeMode = mode));
    this.filterForm.valueChanges.subscribe(filters => {
      this.invoiceOps.applyFilters(filters);
    });
  }

  showFilters() {
    this.showFilter = !this.showFilter;
  }
}
