// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CustomRansomComponent } from './custom-ransom.component';
// import { Store } from '@ngrx/store';
// import { provideMockStore, MockStore } from '@ngrx/store/testing';
// import { InvestmentList } from '../../models/investment-list';
// import {
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   Validators,
// } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { DialogComponent } from '../../components/dialog/dialog.component';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { MatCardModule } from '@angular/material/card';
// import { MatTableModule } from '@angular/material/table';
// import { MatInputModule } from '@angular/material/input';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatButtonModule } from '@angular/material/button';

// describe('CustomRansomComponent', () => {
//   let component: CustomRansomComponent;
//   let fixture: ComponentFixture<CustomRansomComponent>;
//   let store: MockStore<{ investment: InvestmentList }>;
//   let dialog: MatDialog;
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;
//   const initialState = {
//     investment: {
//       acoes: [
//         {
//           id: '1',
//           nome: 'Banco do Brasil (BBAS3)',
//           percentual: 28.1,
//         },
//       ],
//       indicadorCarencia: '',
//       nome: '',
//       objetivo: '',
//       saldoTotal: 12,
//     },
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CustomRansomComponent, DialogComponent],
//       providers: [
//         MatDialog,
//         provideMockStore({ initialState }),
//         FormBuilder,
//         MatCardModule,
//         MatTableModule,
//         MatInputModule,
//         MatGridListModule,
//         MatDialogModule,
//         MatButtonModule,
//         { provide: MAT_DIALOG_DATA, useValue: {} },
//         { provide: MatDialogRef, useValue: {} }
//       ],
//     }).compileComponents();
//     store = TestBed.get<Store>(Store);
//     fixture = TestBed.createComponent(CustomRansomComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     dialog = TestBed.inject(MatDialog);
//     httpClient = TestBed.inject(HttpClient);
//     httpTestingController = TestBed.inject(HttpTestingController);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should be created', () => {
//   //   expect(component.scrollStrategy).toBeTruthy();
//   // });
// });

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { InvestmentList } from '../../models/investment-list';
import { Actions } from '../../models/actions';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { CustomRansomComponent } from './custom-ransom.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const mockStore = {
  select: () =>
    of({
      acoes: [
        {
          id: '1',
          nome: 'Banco do Brasil (BBAS3)',
          percentual: 28.1,
        },
      ],
      indicadorCarencia: '',
      nome: '',
      objetivo: '',
      saldoTotal: 12,
    }),
};

const mockMatDialog = {
  open: () => {
    return {
      afterClosed: () => of(true),
    };
  },
  closeAll: () => {},
};

describe('CustomRansomComponent', () => {
  let component: CustomRansomComponent;
  let fixture: ComponentFixture<CustomRansomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonModule,
        StoreModule.forRoot({}),
      ],
      declarations: [CustomRansomComponent, DialogComponent],
      providers: [
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: Store, useValue: mockStore },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRansomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
