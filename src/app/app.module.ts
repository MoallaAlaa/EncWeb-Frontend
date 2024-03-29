import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAgenceComponent } from './board-agence/board-agence.component';
import { BoardEncaissementComponent } from './board-encaissement/board-encaissement.component';
import { BoardSclienteleComponent } from './board-sclientele/board-sclientele.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { FinJourneeComponent } from './fin-journee/fin-journee.component';
import { ListeChequesRouteEncaissementComponent } from './liste-cheques-route-encaissement/liste-cheques-route-encaissement.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { SaisirBordereauComponent } from './saisir-bordereau/saisir-bordereau.component';
import { ListeChequesRejetesEncaissementComponent } from './liste-cheques-rejetes-encaissement/liste-cheques-rejetes-encaissement.component';
import { ListeChequesRecuEncaissementComponent } from './liste-cheques-recu-encaissement/liste-cheques-recu-encaissement.component';
import { ListeChequesTraitesEncaissementComponent } from './liste-cheques-traites-encaissement/liste-cheques-traites-encaissement.component';
import { RechercheRemisesChequesComponent } from './recherche-remises-cheques/recherche-remises-cheques.component';
import { SubMenuListeComponent } from './sub-menu-liste/sub-menu-liste.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardAgenceComponent,
    BoardEncaissementComponent,
    BoardSclienteleComponent,
    FinJourneeComponent,
    ListeChequesRouteEncaissementComponent,
    SaisirBordereauComponent,
    ListeChequesRejetesEncaissementComponent,
    ListeChequesRecuEncaissementComponent,
    ListeChequesTraitesEncaissementComponent,
    RechercheRemisesChequesComponent,
    SubMenuListeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxImageZoomModule,
    NgxPaginationModule,
    ReactiveFormsModule ,
    Ng2SearchPipeModule,

  ],
  providers: [authInterceptorProviders,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
