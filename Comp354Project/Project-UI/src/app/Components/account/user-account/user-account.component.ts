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
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'user-account',
  templateUrl: './user-account.component.html'
})
export class UserAccountComponent implements OnInit{
    loading = false;
    ans: string;
    accountProductList: MatTableDataSource<any>;
    displayedColumns: string[] = ['id', 'delete', 'imageURL' ,'brand','name','description','price','quantity','permanentPosting'];

    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;

    constructor(private auth: AuthService, private http: HttpClient,  public productService: ProductService,
                private router: Router, private formBuilder: FormBuilder,private modalService: NgbModal){
    }

    ngOnInit(){
        if(!this.auth.isUserLoggedIn()){
            this.router.navigate(['/']);
        }
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

    deleteProduct(prodId) {
        //Make sure the user wants to delete the product
        if (confirm("Are you sure you want to delete this product?") == true) {
            this.productService.deleteProductById(prodId).subscribe(a => {
                this.ans = a;
            })
            window.alert("Product deleted!");
            window.location.reload();
        }
    }
}