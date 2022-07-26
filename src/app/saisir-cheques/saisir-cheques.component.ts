import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cheque } from '../models/cheque.model';
import { ChequeService } from '../_services/cheque.service';

@Component({
  selector: 'app-saisir-cheques',
  templateUrl: './saisir-cheques.component.html',
  styleUrls: ['./saisir-cheques.component.css']
})
export class SaisirChequesComponent implements OnInit {

  public fd = new FormData();
  public s!: String ;
  public cheque!: Cheque;
  public fileUser !: File;
  devises?:any;
  theDate: any;
  constructor(private chequeService : ChequeService) { 

    this.theDate = new Date('26/07/2022');
  }

  ngOnInit(): void {
    this.getListDevise();
  }

  public onAddPost2(addForm : NgForm): void{

    const dfCheque : FormData = new FormData();
    dfCheque.append('file',this.fileUser);
    dfCheque.append('cheque',JSON.stringify(addForm.value));
    console.log(JSON.stringify(addForm.value));
    console.log(this.fileUser);
    this.chequeService.addCheque(dfCheque).subscribe(data=>console.log(data));
    console.log("clicked show success!");
    
  }

  onFileChanged(event : any){
    const file = event.target.files[0];
    this.fileUser = file;
    console.log("file is : ", this.fileUser);

  }

  getListDevise():void{
    this.chequeService.getListeDevise().subscribe({
      next:(data)=>{
        this.devises=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });

}

}
