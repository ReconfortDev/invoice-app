import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftModalComponent } from './left-modal.component';

describe('LeftModalComponent', () => {
  let component: LeftModalComponent;
  let fixture: ComponentFixture<LeftModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
