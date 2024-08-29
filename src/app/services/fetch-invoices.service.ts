import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInvoice } from '../invoices';

@Injectable({
  providedIn: 'root'
})

export class FetchInvoicesService {
  private _invoiceURL : string = '../../assets/data.json'

  constructor(private http: HttpClient) { }

  fetchInvoice(){
    return this.http.get<IInvoice[]>(this._invoiceURL)
  }
}
