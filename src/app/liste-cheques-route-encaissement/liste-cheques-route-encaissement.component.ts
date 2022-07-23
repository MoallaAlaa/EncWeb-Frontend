import { Component, OnInit } from '@angular/core';
import { ChequeService } from '../_services/cheque.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-liste-cheques-route-encaissement',
  templateUrl: './liste-cheques-route-encaissement.component.html',
  styleUrls: ['./liste-cheques-route-encaissement.component.css']
})
export class ListeChequesRouteEncaissementComponent implements OnInit {
  cheques?:any;
  page: number = 1;
  count: number = 0;
  
  constructor(private chequeService : ChequeService) { }

  ngOnInit(): void {
  this.getListChequeEnRoute();
  }


  getListChequeEnRoute():void{
this.chequeService.getListeChequesEnRoute().subscribe({
  next:(data)=>{
    this.cheques=data;
    console.log(data);
  },
  error:(e)=>console.error(e)
});

  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getListChequeEnRoute();
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

getColor(sentOn:any) { 
  let delay = this.calculateDiff(sentOn);
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
