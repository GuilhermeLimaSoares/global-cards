import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentListComponent } from './src/pages/investment-list/investment-list.component';
import { CustomRansomComponent } from './src/pages/custom-ransom/custom-ransom.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-investimentos',
    pathMatch: 'full',
  },
  {
    path: 'lista-investimentos',
    component: InvestmentListComponent,
  },
  {
    path: 'resgate-personalizado',
    component: CustomRansomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
