import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Empresa } from '../models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = 'https://pav2.azurewebsites.net/api/empresas/';
    //this.resourceUrl = 'https://localhost:44349/api/articulos/';
  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
