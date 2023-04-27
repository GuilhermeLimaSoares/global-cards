import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListComponent } from './investment-list.component';
import { InvestmentsService } from '../../services/investments.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { investmentReducer } from '../../store/reducers/investmentReducer';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('InvestmentListComponent', () => {
  let component: InvestmentListComponent;
  let fixture: ComponentFixture<InvestmentListComponent>;
  let investmentsService: InvestmentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentListComponent],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatTableModule,
        MatInputModule,
        MatGridListModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatProgressSpinnerModule,
        StoreModule.forRoot({ investment: investmentReducer })],
      providers: [InvestmentsService, HttpClient, {
        provide: InvestmentsService,
        useValue: {
          listInvestments: () => of({
            response: {
              data: {
                listaInvestimentos: [{
                  acoes: [],
                  indicadorCarencia: '',
                  nome: '',
                  objetivo: '',
                  saldoTotal: 0
                }]
              }
            }
          })
        }
      },],
    }).compileComponents();

    fixture = TestBed.createComponent(InvestmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    investmentsService = TestBed.inject(InvestmentsService);
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display investment table', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should get investments list on init', () => {
    const listaInvestimentos = [{
      acoes: [],
      indicadorCarencia: '',
      nome: '',
      objetivo: '',
      saldoTotal: 0
    }];
    spyOn(investmentsService, 'listInvestments').and.returnValue(
      of({
        response: {
          data: {
            listaInvestimentos: listaInvestimentos
          }
        }
      })
    );

    component.ngOnInit();
    expect(component.dataSource).toEqual(listaInvestimentos);
  });
});
