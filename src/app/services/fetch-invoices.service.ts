import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInvoice } from '../invoices';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchInvoicesService {
  private invoiceURL : string = '../../assets/data.json'

  constructor(private http:HttpClient) { }

  fetchInvoice(): Observable<IInvoice[]>{
    return this.http.get<IInvoice[]>(this.invoiceURL)
  }
}
