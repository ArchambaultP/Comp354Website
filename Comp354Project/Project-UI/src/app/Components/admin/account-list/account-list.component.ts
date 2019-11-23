import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from "rxjs";
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {MatTableDataSource, MatSort} from '@angular/material';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Observable<Account[]>; // TODO: Remove, because it got replaced with Datasource = listData
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  searchKey: string;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

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
    //this.accounts = this.adminService.getAccounts();
    // Convert Observable<Account[]> to a list for MatTableDataSource
    this.adminService.getAccounts().subscribe(
        list => {
            this.listData = new MatTableDataSource(list as Account[]);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
        });
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

  onSearchClear(){
    this.searchKey = "";
  }
}
