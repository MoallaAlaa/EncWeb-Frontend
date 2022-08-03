import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAgenceComponent } from './board-agence/board-agence.component';
import { BoardEncaissementComponent } from './board-encaissement/board-encaissement.component';
import { BoardSclienteleComponent } from './board-sclientele/board-sclientele.component';
import { FinJourneeComponent } from './fin-journee/fin-journee.component';
import { HomeComponent } from './home/home.component';
import { ListeChequesRecuEncaissementComponent } from './liste-cheques-recu-encaissement/liste-cheques-recu-encaissement.component';
import { ListeChequesRejetesEncaissementComponent } from './liste-cheques-rejetes-encaissement/liste-cheques-rejetes-encaissement.component';
import { ListeChequesRouteEncaissementComponent } from './liste-cheques-route-encaissement/liste-cheques-route-encaissement.component';
import { ListeChequesTraitesEncaissementComponent } from './liste-cheques-traites-encaissement/liste-cheques-traites-encaissement.component';
import { LoginComponent } from './login/login.component';
import { RechercheRemisesChequesComponent } from './recherche-remises-cheques/recherche-remises-cheques.component';
import { RegisterComponent } from './register/register.component';
import { SaisirBordereauComponent } from './saisir-bordereau/saisir-bordereau.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'agence', component: BoardAgenceComponent },
  { path: 'encaissement', component: BoardEncaissementComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'sclientele', component: BoardSclienteleComponent },
  { path: 'fin-journee', component: FinJourneeComponent },
  { path: 'chequesEnRouteEncaissement', component: ListeChequesRouteEncaissementComponent },
  { path: 'saisirBordereau', component: SaisirBordereauComponent },
  { path: 'listeChequesTraitesEncaissement', component:ListeChequesTraitesEncaissementComponent},
  { path: 'RechercheRemisesCheques', component:RechercheRemisesChequesComponent},
  { path: 'listeChequesRecuEncaissement', component:ListeChequesRecuEncaissementComponent},
  { path: 'listeChequesRejetesEncaissement', component:ListeChequesRejetesEncaissementComponent},

  
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
