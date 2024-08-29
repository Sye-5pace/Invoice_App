import { TestBed } from '@angular/core/testing';

import { InvoiceOpsFacadeService } from './invoice-ops-facade.service';

describe('InvoiceOpsFacadeService', () => {
  let service: InvoiceOpsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceOpsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
