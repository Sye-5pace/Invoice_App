import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesViewPageComponent } from './invoices-view-page.component';

describe('InvoicesViewPageComponent', () => {
  let component: InvoicesViewPageComponent;
  let fixture: ComponentFixture<InvoicesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesViewPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoicesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
