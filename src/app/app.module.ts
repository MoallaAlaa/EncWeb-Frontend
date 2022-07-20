import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { SaisieChequeComponent } from './saisie-cheque/saisie-cheque.component';
import { FinJourneeComponent } from './fin-journee/fin-journee.component';

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
    SaisieChequeComponent,
    FinJourneeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
