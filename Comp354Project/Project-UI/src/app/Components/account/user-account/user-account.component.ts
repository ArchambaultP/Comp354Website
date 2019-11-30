import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from '../../register/registration.component';
import {MatTableDataSource, MatSort, MatDialog, MatDialogConfig} from '@angular/material';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'user-account',
  templateUrl: './user-account.component.html'
})
export class UserAccountComponent implements OnInit{
    loading = false;
    accountProductList: MatTableDataSource<any>;
    displayedColumns: string[] = ['id','imageURL' ,'brand','name','description','price','quantity','permanentPosting'];

    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

    constructor(private auth: AuthService, private http: HttpClient, private router: Router
            , private formBuilder: FormBuilder,private modalService: NgbModal){
    }

    ngOnInit(){
        this.loadProducts();
    }

    onUpdateInfo(){
        this.loading = true;
        this.auth.getFullCurrentAccount()
            .subscribe(data =>{
                const updateInfoModal = this.modalService.open(RegistrationComponent,{scrollable:true});
                updateInfoModal.componentInstance.accountToUpdate = data;
                updateInfoModal.componentInstance.modalTitle = 'Update Account';
                updateInfoModal.componentInstance.submitBtn = 'Update';
                this.loading = false;
            });
    }

    loadProducts(){
        this.auth.getCurrentUserProducts()
            .subscribe(list =>{
                this.accountProductList = new MatTableDataSource(list);
                this.accountProductList.sort = this.sort;
                this.accountProductList.paginator = this.paginator;
            });
    }

}