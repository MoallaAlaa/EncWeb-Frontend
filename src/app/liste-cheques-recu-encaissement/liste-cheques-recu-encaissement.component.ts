import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../_services/cheque.service';

@Component({
  selector: 'app-liste-cheques-recu-encaissement',
  templateUrl: './liste-cheques-recu-encaissement.component.html',
  styleUrls: ['./liste-cheques-recu-encaissement.component.css']
})
export class ListeChequesRecuEncaissementComponent implements OnInit {
  cheques?:any;
  page: number = 1;
  count: number = 0;
  term!: string;
  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {
    this.getListChequeRecu();
  }

  getListChequeRecu():void{
    this.chequeService.getListeChequeRecu().subscribe({
      next:(data)=>{
        this.cheques=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
    
      }

      onTableDataChange(event: any) {
        this.page = event;
        this.getListChequeRecu();
      }

}
