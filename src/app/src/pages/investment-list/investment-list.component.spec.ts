import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListComponent } from './investment-list.component';

describe('InvestmentListComponent', () => {
  let component: InvestmentListComponent;
  let fixture: ComponentFixture<InvestmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
