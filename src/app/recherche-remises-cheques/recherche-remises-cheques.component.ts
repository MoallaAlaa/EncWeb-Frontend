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
  term!: string;
  config: Object = {};
    
  form: any = {
    numBordereaux: "",
    numCheques: "",
    numCompte: "",
    devise: "",
    montant: "",
    dateBordereaux: "",
  };
  

  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {
 
    this.getListCheques();
  }

  getListCheques():void{
    this.chequeService.Recherche("","","","","","").subscribe({
      next:(data)=>{
        this.cheques=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
    
      }

      onRecherche() :void {
        const { numBordereaux, numCheques,numCompte,devise,montant,dateBordereaux } = this.form;
        this.cheques=null;

        console.log(numBordereaux, numCheques,numCompte,devise,montant,dateBordereaux);
        this.chequeService.Recherche(numBordereaux,numCheques,numCompte,devise,montant,dateBordereaux).subscribe({
          next:(data)=>{
            this.cheques=data;
            console.log(data);
          },
          error:(e)=>console.error(e)
        });
        
      }
    }

    
