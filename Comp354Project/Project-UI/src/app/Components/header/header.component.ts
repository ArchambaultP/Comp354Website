import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService} from "../../service/search.service";
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../register/registration.component';
import { EmailVerification } from '../account/email-verification/email-verification.component';
import { PasswordUpdate } from '../account/password-update/password-update.component';
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


  constructor(private router: Router, public searchService: SearchService,private auth: AuthService, private modalService: NgbModal) {
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
    this.router.navigate(['/']);
  }

  login(){
    this.modalService.open(LoginComponent);
  }

  register(){
    const registrationModal = this.modalService.open(RegistrationComponent,{scrollable:true});
    registrationModal.componentInstance.modalTitle = 'Sign Up';
    registrationModal.componentInstance.submitBtn = 'Register';
  }

  resetPassword(){
    const resetPwdModal = this.modalService.open(EmailVerification);
    resetPwdModal.componentInstance.modalTitle = 'Account Recovery';
    resetPwdModal.componentInstance.codeName = 'Recovery Code';
    resetPwdModal.componentInstance.submitBtn = 'Recover';
  }

  activateAccount(){
    const actModal = this.modalService.open(EmailVerification);
    actModal.componentInstance.modalTitle = 'Account Activation';
    actModal.componentInstance.codeName = 'Activation Code';
    actModal.componentInstance.submitBtn = 'Activate';
  }
}
