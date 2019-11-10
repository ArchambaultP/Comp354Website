import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../service/account.service";

// TODO: Add component for account-form (create accounts manually)
@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];
  searchAccountKey: string;

  constructor(private accountService: AccountService) {

  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      // @ts-ignore TODO: Check error related to ts
      this.accounts = data;
    });
  }

  onSearchClear(){
    this.searchAccountKey = "";
    this.filterAccount();
  }

  filterAccount(){
  }
}
