import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-fin-journee',
  templateUrl: './fin-journee.component.html',
  styleUrls: ['./fin-journee.component.css']
})
export class FinJourneeComponent implements OnInit {
  bx?:any;
  total=0;    
  value?:any; 
  title = 'Liste Bordereaux';
   constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getBordereauxListAenvoyees().subscribe({next:(data)=> {
    this.bx=data;
    this.findsum(this.bx);
    console.log(data);
  },
  error: (e) => console.error(e)
});

  }

  get totalRows(): number {
    return this.bx.length;
  }

  findsum(data?:any){    
    
    this.value=data    
    console.log(this.value);  
    for(let j=0;j<data.length;j++){   
         this.total+= this.value[j].nbrCheques  
         console.log(this.total)  
    }  
  }  

  
public convetToPDF()
{
html2canvas(document.body).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}



}
