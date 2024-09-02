import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleinvoiceComponent } from './singleinvoice.component';

describe('SingleinvoiceComponent', () => {
  let component: SingleinvoiceComponent;
  let fixture: ComponentFixture<SingleinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleinvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
