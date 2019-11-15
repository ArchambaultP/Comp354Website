import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Observable<Account[]>;

  constructor(private adminService: AdminService, private router:Router, private auth: AuthService) {
    // TODO: Check if admin or superAdmin
    if(!this.auth.isAdmin()){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.accounts = this.adminService.getAccounts();
  }

  deleteAccount(id:number){
    this.adminService.deleteAccount(id)
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
    //this.router.navigate(['admin/accounts/add']);
    this.router.navigate(['registration']);
  }

  accountDetails(id: number){
    this.router.navigate(['admin/accounts/details', id]);
  }
}
