import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  private readonly API = 'https://run.mocky.io/v3/ca4ec77d-b941-4477-8a7f-95d4daf7a653';
  constructor(private http: HttpClient) { }

  listInvestments(): Observable<any> {
    return this.http.get<any>(this.API);
  }
}
