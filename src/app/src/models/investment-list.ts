import { Actions } from "./actions";

export interface InvestmentList {
  acoes: Actions[];
  indicadorCarencia: string;
  nome: string;
  objetivo: string;
  saldoTotal: number;
}
