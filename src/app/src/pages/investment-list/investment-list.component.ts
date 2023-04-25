import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../../services/investments.service';
import {InvestmentList} from'../../models/investment-list';

const ELEMENT_DATA: InvestmentList[] = [
  {
  acoes: [],
  indicadorCarencia: 'N',
  nome: 'INVESTIMENTO I',
  objetivo: 'Minha aposentadoria',
  saldoTotal: 39321.29
  },
];

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})

export class InvestmentListComponent implements OnInit{
  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotal', ];
  dataSource: InvestmentList[] = ELEMENT_DATA;

  constructor(private service: InvestmentsService) {}

  ngOnInit(): void {
    this.service.listInvestments().subscribe((data) => {
      this.dataSource = data?.response?.data?.listaInvestimentos;
    })
  }
}
