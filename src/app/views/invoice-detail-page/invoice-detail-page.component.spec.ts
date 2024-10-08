import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDetailPageComponent } from './invoice-detail-page.component';

describe('InvoiceDetailPageComponent', () => {
  let component: InvoiceDetailPageComponent;
  let fixture: ComponentFixture<InvoiceDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
