import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  searchAccountKey: string;

  constructor(private accountService: AccountService, private router:Router) {
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }

  deleteAccount(account){
    this.accountService.deleteAccount(account.id).subscribe((data)=>{
      this.accounts.splice(this.accounts.indexOf(account), 1);
      }, (error => {
        console.log(error);
      }));
  }

  createAccount(){
    let account = new Account(); // Create new user account
    this.accountService.setter(account);
    this.router.navigate(['/admin/accounts/update']).then(r => console.log("Create account"));
  }

  updateAccount(account){
    this.accountService.setter(account);
    this.router.navigate(['/admin/accounts/update']).then(r => console.log("Update account"));
  }
}
