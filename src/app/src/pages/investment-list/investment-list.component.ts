import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  totalBalance: number;
  goal: string;
};

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', totalBalance: 1.0079, goal: 'H'},
  {name: 'Helium', totalBalance: 4.0026, goal: 'He'},
  {name: 'Lithium', totalBalance: 6.941, goal: 'Li'},
  {name: 'Beryllium', totalBalance: 9.0122, goal: 'Be'},
  {name: 'Boron', totalBalance: 10.811, goal: 'B'},
  {name: 'Carbon', totalBalance: 12.0107, goal: 'C'},
  {name: 'Nitrogen', totalBalance: 14.0067, goal: 'N'},
  {name: 'Oxygen', totalBalance: 15.9994, goal: 'O'},
  {name: 'Fluorine', totalBalance: 18.9984, goal: 'F'},
  { name: 'Neon', totalBalance: 20.1797, goal: 'Ne'},
];

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss'],
})

export class InvestmentListComponent {
  displayedColumns: string[] = ['name', 'goal', 'totalBalance', ];
  dataSource = ELEMENT_DATA;
}
