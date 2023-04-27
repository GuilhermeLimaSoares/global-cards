import { createReducer, on } from '@ngrx/store';
import { investment } from '../actions/investment.actions';

const initialState = {
  acoes: [{
    id: "1",
    nome: "Banco Sao Paulo",
    percentual: 0
  }],
  indicadorCarencia: '',
  nome: '',
  objetivo: '',
  saldoTotal: 0
};

export const investmentReducer = createReducer(
  initialState,
  on(investment, (state, payload) => {
    return payload;
  }))
