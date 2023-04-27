import { InvestmentList } from './../../models/investment-list';
import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { Actions } from '../../models/actions';

export const investment = createAction(
  '[Investment Page] Investment',
  props<{
    acoes: Actions[];
    indicadorCarencia: string;
    nome: string;
    objetivo: string;
    saldoTotal: number;
  }>()

);
