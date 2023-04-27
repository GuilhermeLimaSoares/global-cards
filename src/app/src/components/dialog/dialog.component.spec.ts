import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent, DialogData } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            actionList: [
              {
                id: '1',
                nome: 'Action 1',
                percentual: 50
              },
              {
                id: '2',
                nome: 'Action 2',
                percentual: 50
              }
            ],
            invalidFildList: [true, true],
            totalBalance: 1000
          } as DialogData
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set values from dialog data in ngOnInit', () => {
    expect(component.invalidFildList.length).toEqual(2);
    expect(component.isErrorRow).toBeFalse();
    expect(component.totalBalance).toEqual(1000);
  });

  it('should calculate percentual correctly', () => {
    expect(component.calculePercentual(50, 1000)).toEqual(500);
  });

  it('should call onButtonClick when button is clicked', () => {
    spyOn(component, 'onClose');
    const button = fixture.nativeElement.querySelector('#btnClose');
    button.click();
    button.dispatchEvent(new Event('click'));
    expect(component.onClose).toHaveBeenCalled();
  });
});
