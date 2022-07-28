import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { ChequeService } from '../_services/cheque.service';

@Component({
  selector: 'app-saisir-bordereau',
  templateUrl: './saisir-bordereau.component.html',
  styleUrls: ['./saisir-bordereau.component.css']
})
export class SaisirBordereauComponent {
  bordereauForm: any;
  isSubmitted: boolean = false;
  titleAlert: string = 'This field is required';
  post: any = '';
  phoneRegex: RegExp = /^((3[0-9])|(6[0-9])|(8[1-9])|(9[0-8]))[0-9]{6}$/;
  theDate: any;
  devises?:any;

  constructor(private formBuilder: FormBuilder,private chequeService : ChequeService) { }

  ngOnInit(): void {
    this.getListDevise();
    this.createForm();

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

  createForm() {
    this.bordereauForm = this.formBuilder.group({
      numBordereaux: ['', Validators.required],
      dateBordereaux: ['', Validators.required],

      
      cheques: this.formBuilder.array([
        this.formBuilder.group({
          numCheque: ['', Validators.required],
          montant:['', Validators.required],
          devise:['', Validators.required],
          photos: ['',Validators.required],
        }),
      ]),
    });
  }

  onSubmit(post: any, isValid: any) {
    this.isSubmitted = true;
    if (!isValid) return;
    this.post = post;
    console.log(JSON.stringify(post));

    const dfCheque : FormData = new FormData();
    dfCheque.append('bordereau',JSON.stringify(post));
    this.chequeService.addCheque2(dfCheque).subscribe(data=>console.log(data));


  }

  // add new form group to contacts array
  addContactField() {
    let control = <FormArray>this.bordereauForm.controls.cheques;
    control.push(
      this.formBuilder.group({
        numCheque: ['', Validators.required],
        montant:['', Validators.required],
        devise:['', Validators.required],
        photos: ['',Validators.required],
      })
    );
  }

  detectFiles(event:any, i:any) {
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          
          this.cheques.controls[i].patchValue({ photos: e.target.result });

          return e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }

  removeContactField() {
    let control = <FormArray>this.bordereauForm.controls.cheques;
    control.removeAt(control.length - 1);
  }

  // form controls access for validation
  get numBordereaux() {
    return this.bordereauForm.get('numBordereaux');
  }
  get dateBordereaux() {
    return this.bordereauForm.get('dateBordereaux');
  }


  get cheques() {
    return this.bordereauForm.get('cheques') as FormArray;
  }
}



