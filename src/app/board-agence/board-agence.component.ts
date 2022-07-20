import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-agence',
  templateUrl: './board-agence.component.html',
  styleUrls: ['./board-agence.component.css']
})
export class BoardAgenceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
finJournee():void {
  this.router.navigate(['/fin-journee']);
}
}
