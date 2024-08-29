import { TestBed } from '@angular/core/testing';

import { FetchInvoicesService } from './fetch-invoices.service';

describe('FetchInvoicesService', () => {
  let service: FetchInvoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchInvoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
