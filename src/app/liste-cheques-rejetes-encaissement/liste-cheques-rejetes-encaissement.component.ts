import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../_services/cheque.service';

@Component({
  selector: 'app-liste-cheques-rejetes-encaissement',
  templateUrl: './liste-cheques-rejetes-encaissement.component.html',
  styleUrls: ['./liste-cheques-rejetes-encaissement.component.css']
})
export class ListeChequesRejetesEncaissementComponent implements OnInit {
  cheques?:any;
  page: number = 1;
  count: number = 0;
  term!: string;
  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {
    this.getListChequeRejet();
  }

  getListChequeRejet():void{
    this.chequeService.getListeChequeRejeter().subscribe({
      next:(data)=>{
        this.cheques=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
    
      }
      onTableDataChange(event: any) {
        this.page = event;
        this.getListChequeRejet();
      }

      calculateDiff(sentOn:any){

        let todayDate = new Date();
        const [day,month, year] = sentOn.split('-');
        let sentOnDate = new Date(+year,+month-1,+day);
        let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
        // To calculate the no. of days between two dates
        let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
        return differenceInDays;
    }

    getColor(sentOn:any , d:any) { 
      let delay = this.calculateDiff(sentOn);
      if(d){
        return 'white'
      }else{
        if ((delay>2) &&(delay<=5)) {
          return 'orange';
        }
        else if(delay>5){
          return 'red';
        }
        else 
         return 'white';
      
    
      }
}

chequeRecu(id: any): void {
  this.chequeService.ChequesRejetRecuParAgence(id)
    .subscribe(
      response => {
        console.log(response);
        
        window.location.reload();
      },
      error => {
        console.log(error);
        window.location.reload();
      });
      
}

}
 
