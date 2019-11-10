import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../../service/account.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  private account: Account;

  constructor(private accountService:AccountService, private router:Router) {

  }

  ngOnInit() {
    this.account = this.accountService.getter();
  }

  onSubmit(){
    if(this.account.id==undefined){
      this.accountService.createAccount(this.account).subscribe((account)=>{
        console.log(account);
        this.router.navigate(['/admin/accounts']);
        },(error => {
            console.log(error);
        }));
    }
    else{
      this.accountService.updateAccount(this.account).subscribe((account)=>{
        console.log(account);
        this.router.navigate(['/admin/accounts']); // Go back to accounts table
        },(error => {
            console.log(error);
        }));
    }
  }

}
