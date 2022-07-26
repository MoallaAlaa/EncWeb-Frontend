import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cheque } from '../models/cheque.model';
import { Devise } from '../models/devise.model';
const API_URL = 'http://localhost:8080/api/cheque';
const DEVISE_URL = 'http://localhost:8080/api/devise';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {

  constructor(private http: HttpClient) { }

  addCheque(f : FormData){
    return this.http.post(`${API_URL}/addCheque`,f);
  }

  finJournee(){
    return this.http.get(API_URL+'/finJournee');
  }

  getBordereauxListAenvoyees():Observable<any>{
    return this.http.get<any[]>(`${API_URL}/ChequesAenvoyer`);
  }

  getListeChequesEnRoute(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(API_URL+'/ChequesEnRoute');
  }

  getListeDevise(): Observable<Devise[]> {
    return this.http.get<Devise[]>(DEVISE_URL+'/ListeDevise');
  }
}
