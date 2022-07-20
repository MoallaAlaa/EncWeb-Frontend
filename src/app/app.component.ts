import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { UserService } from './_services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showSclienteleBoard = false;
  showAgenceBoard = false;
  showEncaissementBoard = false;
  username?: string;
  name?:string;
  auxUser : any;
 
  constructor(private tokenStorageService: TokenStorageService , private userService: UserService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAgenceBoard = this.roles.includes('ROLE_AGENCE');
      this.showEncaissementBoard = this.roles.includes('ROLE_ENCAISSEMENT');
      this.showSclienteleBoard = this.roles.includes('ROLE_SCLIENTELE');
      this.username = user.username;
      this.userService.getUserById(user.id).subscribe(
        data=>{this.auxUser=data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
  
      );
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}