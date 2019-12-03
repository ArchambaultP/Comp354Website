import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../model/review';
import { ReviewService} from "../../service/review.service";
import { ActivatedRoute} from '@angular/router';
import { AuthService } from '../../service/auth.service';

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


   @Input() productId;
   review: Review = new Review();
   currentUser;
   @Input() productName;

   constructor(private reviewService: ReviewService,private route: ActivatedRoute, private auth: AuthService)
   {

   }


  ngOnInit() {
    if(this.auth.isUserLoggedIn())
    {
       this.currentUser = this.auth.currentUserId();
    }
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
    this.review.userId = this.currentUser;
    this.review.productId = this.productId;
    this.review.productName = this.productName;
    window.alert("review submitted test");
    this.save();
  }
}

