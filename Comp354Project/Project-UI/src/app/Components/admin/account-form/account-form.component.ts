import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {
  account: Account = new Account();
  submitted = false;

  constructor(private accountService:AdminService, private router:Router) {
    // TODO: Check if admin or superAdmin
  }

  ngOnInit() {
  }

  newAccount(): void {
    this.submitted = false;
    this.account = new Account();
  }

  save() {
    this.accountService.createAccount(this.account)
        .subscribe(data => console.log(data), error => console.log(error));
    this.account = new Account();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/admin/accounts']);
  }
}
