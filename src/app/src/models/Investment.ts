import { InvestmentList } from "./investment-list";

export interface listaInvestimentos {
  listaInvestimentos: InvestmentList[];
}

export interface InvestmentData {
  data: listaInvestimentos;
}

export interface InvestmentResponse {
  response: InvestmentData;
  status?: string;
}
