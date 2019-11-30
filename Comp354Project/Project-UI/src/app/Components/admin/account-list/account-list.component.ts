import {Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from "rxjs";
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import {Router} from "@angular/router";
import {AuthService} from "../../../service/auth.service";
import {MatTableDataSource, MatSort, MatDialog, MatDialogConfig} from '@angular/material';
import {MatPaginator} from "@angular/material/paginator";
import {RegistrationComponent} from "../../register/registration.component";
import {AccountDetailsComponent} from "../account-details/account-details.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  searchKey: string;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private adminService: AdminService, private router:Router, private auth: AuthService, private dialog: MatDialog,
              private modalService: NgbModal) {
    if(!this.auth.isAdmin() || !this.auth.isSuperAdmin()){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
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

  updateAccount(accountToUpdate){
    // TODO: Allow superAdmin to edit 'admin' permissions
    const registrationModal = this.modalService.open(RegistrationComponent);
    registrationModal.componentInstance.modalTitle = 'Update Account';
    registrationModal.componentInstance.submitBtn = 'Update';
    registrationModal.componentInstance.accountToUpdate = accountToUpdate;
  }

  createAccount(){
    const registrationModal = this.modalService.open(RegistrationComponent);
    registrationModal.componentInstance.modalTitle = 'Create Account';
    registrationModal.componentInstance.submitBtn = 'Create';
  }

  accountDetails(accountId: number){
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    //dialogConfig.height = "95%";
    dialogConfig.data = {
      id: accountId
    };
    this.dialog.open(AccountDetailsComponent, dialogConfig);
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
