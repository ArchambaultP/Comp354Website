import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../model/review';
import { ReviewService} from "../../service/review.service";
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {

    a=4;
    @Input() productId;

    reviews: Review[];
    ratingNum;

  constructor(private reviewService: ReviewService,private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(params => {
      this.reviewService.findReviewById(this.productId).subscribe(p =>{
        this.reviews = p;
        this.loadReviewInfo(this.reviews);
      })
    });

  }

  loadReviewInfo(reviews){

    if(reviews.length > 0){
        this.ratingNum =0.0;
        reviews.forEach(x => this.ratingNum += x.rating);
                      console.log("before div");
        this.ratingNum = (this.ratingNum/reviews.length).toFixed(2);
    }
    else
    {
        this.ratingNum = "No rating yet !";
    }
  }

}
