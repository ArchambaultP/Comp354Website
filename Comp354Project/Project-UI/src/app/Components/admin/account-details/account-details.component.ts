import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from "../../../service/admin.service";
import {Account} from "../../../model/account";
import { AuthenticatedUser } from '../../../model/authenticatedUser';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  id: number;
  account: Account;

  constructor(private route: ActivatedRoute,private router: Router,
              private adminService: AdminService) { }

  ngOnInit() {
    this.account = new Account();

    this.id = this.route.snapshot.params['id'];

    this.adminService.getAccount(this.id)
        .subscribe(data => {
          console.log(data)
          this.account = data;
        }, error => console.log(error));
  }

  list(){
    this.router.navigate(['admin/accounts']);
  }

}
