import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  isLoggedIn = this.auth.isUserLoggedIn();
  currentUser = this.auth.currentUser();

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {

  }
  logout(){
    this.auth.logout();
  }

}
