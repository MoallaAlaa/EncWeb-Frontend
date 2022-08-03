import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-menu-liste',
  templateUrl: './sub-menu-liste.component.html',
  styleUrls: ['./sub-menu-liste.component.css']
})
export class SubMenuListeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  listeChequesRecus():void {
    this.router.navigate(['/listeChequesRecuEncaissement']);
  }
  
  listeChequesRejetees():void {
    this.router.navigate(['/listeChequesRejetesEncaissement']);
  }
  
  listeChequesRoute():void {
    this.router.navigate(['/chequesEnRouteEncaissement']);
  }
  
  listeChequesTraitee():void {
    this.router.navigate(['/listeChequesTraitesEncaissement']);
  }

}
