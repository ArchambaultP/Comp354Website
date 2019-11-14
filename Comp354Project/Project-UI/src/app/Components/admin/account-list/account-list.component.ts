import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Observable<Account[]>;

  constructor(private accountService: AdminService, private router:Router) {
    // TODO: Check if admin or superAdmin
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.accountService.getAccounts();
  }

  deleteAccount(id:number){
    this.accountService.deleteAccount(id)
        .subscribe(
            data => {
              console.log(data);
              this.reloadData();
            },
            error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['admin/accounts/details', id]);
  }

  updateAccount(id: number){
    this.router.navigate(['admin/accounts/update', id]);
  }

  createAccount(){
    this.router.navigate(['admin/accounts/add']);
  }
}
