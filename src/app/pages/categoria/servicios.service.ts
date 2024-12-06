import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaResponse } from './categoria-reponse';
import { url } from '../../constans-url';

@Injectable({
  providedIn: 'root'
})
export class CategoriaResponseService {

  constructor(
    protected _http:HttpClient
  ) {

   }


   get():Observable<CategoriaResponse[]>{
    return this._http.get<CategoriaResponse[]>(url);
   }
}
