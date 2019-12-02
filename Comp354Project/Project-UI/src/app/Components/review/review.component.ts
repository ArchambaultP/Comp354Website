import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { StorageService } from '../../service/storage.service';
import { Review } from '../../model/review';
import { ReviewService} from "../../service/review.service";
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent {
  public customerDetails: any = {};
  public checkOutFlag: any = {};
  public invoiceDate: any = new Date();
  public invoiceNo: any = Math.floor(Math.random() * 10000);


   review: Review = new Review();

   constructor(private reviewService: ReviewService,private route: ActivatedRoute)
   {

   }


  ngOnInit() {
    this.customerDetails = this.cart.loadCheckoutInfo('customerInfo');
    this.cart.allItems = this.__allprdts;
    this.cart.listCartItems();
    this.checkOutFlag = JSON.parse(this.storage.get('mycart'));
  }


  newReview(): void {
    this.review = new Review();
  }

  save() {
    this.reviewService.createReview(this.review)
        .subscribe(data => console.log(data), error => console.log(error));
    this.review = new Review();
  }

  onSubmit() {

    window.alert("review submitted test");
    this.save();
  }
}

