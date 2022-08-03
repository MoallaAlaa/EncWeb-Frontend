import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../_services/cheque.service';

@Component({
  selector: 'app-liste-cheques-traites-encaissement',
  templateUrl: './liste-cheques-traites-encaissement.component.html',
  styleUrls: ['./liste-cheques-traites-encaissement.component.css']
})
export class ListeChequesTraitesEncaissementComponent implements OnInit {
  cheques?:any;
  page: number = 1;
  count: number = 0;
  term!: string;
  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {

    this.getListChequeTraitee();
  }
  getListChequeTraitee():void{
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
        this.getListChequeTraitee();
      }

}
