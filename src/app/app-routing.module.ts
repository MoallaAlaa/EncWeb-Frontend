import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAgenceComponent } from './board-agence/board-agence.component';
import { BoardEncaissementComponent } from './board-encaissement/board-encaissement.component';
import { BoardSclienteleComponent } from './board-sclientele/board-sclientele.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'agence', component: BoardAgenceComponent },
  { path: 'encaissement', component: BoardEncaissementComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'sclientele', component: BoardSclienteleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
