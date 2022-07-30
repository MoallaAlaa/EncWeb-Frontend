import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../_services/cheque.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-recherche-remises-cheques',
  templateUrl: './recherche-remises-cheques.component.html',
  styleUrls: ['./recherche-remises-cheques.component.css']
})
export class RechercheRemisesChequesComponent implements OnInit {
  cheques?:any;
  page: number = 1;
  count: number = 0;
    numBordereau = new FormControl('');
    numCheque = new FormControl(''); 
    dateBordereau = new FormControl(''); 
    numCompte = new FormControl(''); 
    montant = new FormControl(''); 
    devise = new FormControl(''); 
  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {
    
    this.getListCheques();
  }

  getListCheques():void{
    this.chequeService.getListeChequeTraiter().subscribe({
      next:(data)=>{
        this.cheques=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
    
      }

      onTableDataChange(event: any) {
        this.page = event;
        this.getListCheques();
      }
}
