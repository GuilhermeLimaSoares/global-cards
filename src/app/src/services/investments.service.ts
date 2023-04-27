import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvestmentResponse } from '../models/Investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  private readonly API = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';
  constructor(private http: HttpClient) { }

  listInvestments(): Observable<InvestmentResponse> {
    return this.http.get<InvestmentResponse>(this.API);
  }
}
