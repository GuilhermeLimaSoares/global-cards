import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { investment } from '../../store/actions/investment.actions';
import { InvestmentList } from '../../models/investment-list';

@Component({
  selector: 'app-custom-ransom',
  templateUrl: './custom-ransom.component.html',
  styleUrls: ['./custom-ransom.component.scss']
})

export class CustomRansomComponent implements OnInit {
  currentinvestment$: Observable<any>;
  initialState = {
    acoes: [{
      id: "1",
      nome: "Banco do Brasil (BBAS3)",
      percentual: 28.1
    }],
    indicadorCarencia: '',
    nome: '',
    objetivo: '',
    saldoTotal: 12
  };

  constructor(private store: Store<{ investment: InvestmentList }>) {
    this.currentinvestment$ = store.select('investment');
  };

  ngOnInit(): void {
    this.currentinvestment$.subscribe((data) => {
      this.initialState = data;
    });
  }
}

