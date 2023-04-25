import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRansomComponent } from './custom-ransom.component';

describe('CustomRansomComponent', () => {
  let component: CustomRansomComponent;
  let fixture: ComponentFixture<CustomRansomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRansomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRansomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
