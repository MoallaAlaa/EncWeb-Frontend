import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cheque } from '../models/cheque.model';
import { Devise } from '../models/devise.model';
import { ChequesRecuParEncaissement } from '../models/chequeRecuEncaissement.model';
import{ChequeTraiteeEncaissement} from '../models/chequeTraiteeEncaissement.model'
import { ChequeRejeteeEncaissement } from '../models/chequeRejeteeEncaissement.model';
const API_URL = 'http://localhost:8080/api/cheque';
const DEVISE_URL = 'http://localhost:8080/api/devise';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  httpClient: any;

  constructor(private http: HttpClient) { }


  addCheque2(f : FormData){
    return this.http.post(`${API_URL}/addCheque2`,f);
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

  getListeChequeRecu():Observable<ChequesRecuParEncaissement[]>{
    return this.http.get<ChequesRecuParEncaissement[]>(API_URL+'/AfficherListeChequeRecu');

  }

  getListeChequeRejeter():Observable<ChequeRejeteeEncaissement[]>{
    return this.http.get<ChequeRejeteeEncaissement[]>(API_URL+'/AfficherListeChequeRejeter');

  }
  
  ChequesRejetRecuParAgence(id: any) {
    return this.http.get(`${API_URL+"/ChequesRejetRecuParAgence"}?chequeId=${id}`);
  }

  getListeChequeTraiter():Observable<ChequeTraiteeEncaissement[]>{
    return this.http.get<ChequeTraiteeEncaissement[]>(API_URL+'/AfficherListeChequeTraiter');

  }
  
  getListeAllCheque():Observable<Cheque[]>{
    return this.http.get<Cheque[]>(API_URL+'/AfficherListeCheque');

  }

  public Recherche(numBordereaux:any,numCheques:any,numCompte:any , devise: any , montant: any ,dateBordereaux: any): Observable<ChequeTraiteeEncaissement[]>{
    
    let params = new HttpParams()
    .set('numBordereaux', numBordereaux)
    .set('numCheques', numCheques)
    .set('numCompte', numCompte)
    .set('devise', devise)
    .set('montant', montant)
    .set('dateBordereaux', dateBordereaux);

    return this.http.get<ChequeTraiteeEncaissement[]>(API_URL+'/Recherche', {params: params});
  }





}
