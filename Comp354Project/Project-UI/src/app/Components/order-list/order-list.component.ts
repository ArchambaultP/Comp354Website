import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Product} from "../../model/product";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Account} from "../../model/account";
import {OrderService} from "../../service/order.service";
import {AuthService} from "../../service/auth.service";
import {AuthenticatedUser} from "../../model/authenticatedUser";
import {OrderItem} from "../../model/orderItem";
import {RegistrationComponent} from "../register/registration.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AccountDetailsComponent} from "../admin/account-details/account-details.component";
import {Router} from "@angular/router";
import {AccountOrder} from "../../model/accountOrder";
import {OrderInfo} from "../../model/orderInfo";
import {Observable} from "rxjs";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrderListComponent implements OnInit {

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'date'];
  searchKey: string;

  // TODO: delete orderinfo
  orderInfos: OrderInfo[];
  accountOrders: Observable<AccountOrder>;
  authUser: AuthenticatedUser;
  expandedElement: AccountOrder | null;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private orderService: OrderService, private auth: AuthService, private dialog: MatDialog,
              private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    // Convert Observable<Account[]> to a list for MatTableDataSource
    this.authUser = JSON.parse(sessionStorage.getItem('user'));
    this.orderService.getAccountOrders(+this.authUser.id).subscribe(
        list => {
          console.log(list);
          this.listData = new MatTableDataSource(list as AccountOrder[]);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
        });
    this.accountOrders = this.orderService.getAccountOrders(+this.authUser.id);
    //console.log(this.accountOrders);
  }

  orderDetails(productId: number){
    /*const dialogConfig = new MatDialogConfig();
    //dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    //dialogConfig.height = "95%";
    dialogConfig.data = {
      id: productId
    };
    this.dialog.open(AccountDetailsComponent, dialogConfig);*/
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
}
