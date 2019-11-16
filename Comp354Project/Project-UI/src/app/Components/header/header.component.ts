import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService} from "../../service/search.service";
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public searchText = "";
    isLoggedIn: boolean;
    currentUser: string;
    authentications: any[] = [];
    subscription: Subscription;


  constructor(private router: Router, public searchService: SearchService,private auth: AuthService) {
  this.subscription = this.auth.getMessage().subscribe( message => {
                if(message){
                    if(message['text'] == 'authenticated'){
                        this.isLoggedIn = true;
                        this.currentUser = this.auth.isUserLoggedIn();
                    }else if(message['text'] == 'logout'){
                        this.isLoggedIn = false;
                        this.currentUser = '';
                    }
                }
            });
  }

  ngOnInit() {
    this.isLoggedIn = !!(this.auth.isUserLoggedIn());
    if(this.isLoggedIn){
        this.currentUser = this.auth.isUserLoggedIn();
    }
  }

  setSearchText(){
    this.searchService.searchText = this.searchText;
    console.log("Search text in header: " + this.searchText);
  }

    logout(){
      this.auth.logout();
    }
}
