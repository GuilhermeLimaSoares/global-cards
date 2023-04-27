import { Component, DoCheck, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InvestmentList } from '../../models/investment-list';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Actions } from '../../models/actions';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

const ELEMENT_DATA: Actions[] = [
  {
    id: '',
    nome: '',
    percentual: 0,
  },
];

@Component({
  selector: 'app-custom-ransom',
  templateUrl: './custom-ransom.component.html',
  styleUrls: ['./custom-ransom.component.scss'],
})
export class CustomRansomComponent implements OnInit, DoCheck {
  totalBalance: number = 0;
  invalidFildList: boolean[] = [true, true, true, true];
  balanceList: number[] = [];
  resgate = {};
  displayedColumns: string[] = ['AÇÂO', 'SALDO ACUMULADO', 'RESGATAR'];
  currentinvestment$: Observable<any>;
  dataTable: Actions[] = [];
  initialState = {
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
  };

  form!: FormGroup;

  constructor(
    private store: Store<{ investment: InvestmentList }>,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.currentinvestment$ = store.select('investment');
  }

  ngDoCheck(): void {
    this.totalBalance = this.sumTotalBalance(this.balanceList);
  }

  ngOnInit(): void {
    this.currentinvestment$.subscribe((data) => {
      this.initialState = data;
      this.dataTable = data?.acoes;

      const validMax = (perc: number) =>
        new FormControl('Digite quanto quer resgatar', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.max(perc),
        ]);

      let listRescue = data?.acoes.map((current: any, index: number) =>
        validMax(current?.percentual)
      );

      this.resgate = Object.assign({}, listRescue);
    });

    this.form = this.formBuilder.group(this.resgate);
  }

  getValidator(listValidators: any = {}, index: number) {
    return listValidators[index];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        invalidFildList: this.invalidFildList,
        totalBalance: this.totalBalance,
      },
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  setInvalidField(isValid: boolean, index: number): void {
    this.invalidFildList[index] = isValid;
  }

  updateBalanceList(value: number, index: number): void {
    this.balanceList[index] = value;
  }

  sumTotalBalance(list: number[]): number {
    const initialValue = 0;
    return list.reduce(
      (acc: number, currentValue: number) => acc + currentValue,
      initialValue
    );
  }

  calculePercentual(percentual: number, totalBalance: number): number {
    return totalBalance * (percentual/100);
  }
}
