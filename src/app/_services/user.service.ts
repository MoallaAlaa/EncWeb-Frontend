import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
const API = 'http://localhost:8080/api/cheque';
const GETONE='http://localhost:8080/api/userCrud/agentById';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  

  getUserById(id: any):Observable<User>{
    
    return this.http.get<User>(`${GETONE}/${id}`);

  }
  
  addCheque(f : FormData){
    return this.http.post(`${API}/addCheque`, f);
  }

  finJournee(){
    return this.http.get(API+'/finJournee');
  }

  getBordereauxListAenvoyees():Observable<any>{
    return this.http.get<any[]>(`${API}/ChequesAenvoyer`);
  }


}