import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { InvestmentsService } from '../../services/investments.service';
import { InvestmentList } from '../../models/investment-list';
import { investment } from '../../store/actions/investment.actions';

const ELEMENT_DATA: InvestmentList[] = [
  {
    acoes: [],
    indicadorCarencia: '',
    nome: '',
    objetivo: '',
    saldoTotal: 0
  },
];

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})
export class InvestmentListComponent implements OnInit {
  isVisibleLoader: boolean = true;
  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal'];
  dataSource: InvestmentList[] = ELEMENT_DATA;
  selectedInvestment: InvestmentList = {
    acoes: [
      {
        id: '',
        nome: '',
        percentual: 0,
      },
    ],
    indicadorCarencia: '',
    nome: '',
    objetivo: '',
    saldoTotal: 0,
  };

  constructor(
    private router: Router,
    private service: InvestmentsService,
    private store: Store<{ investment: InvestmentList }>
  ) {}

  ngOnInit(): void {
    this.service.listInvestments().subscribe((data) => {
      this.dataSource = data?.response?.data?.listaInvestimentos;
      this.isVisibleLoader = false;
    }, error => {
      this.isVisibleLoader = false;
      alert(error);
    });
  }

  setInvestment(selectedInvestment: InvestmentList): void {
    this.store.dispatch(
      investment(selectedInvestment)
    );

    this.router.navigate(['/resgate-personalizado']);
  }
}
