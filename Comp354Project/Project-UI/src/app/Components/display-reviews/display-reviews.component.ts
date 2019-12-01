import { Component, OnInit } from '@angular/core';
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

    reviews: Review[];

  constructor(private reviewService: ReviewService,private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.route.paramMap.subscribe(params => {
      this.reviewService.findReviewById(params.get('id')).subscribe(p =>{
        this.reviews = p;
      })
    });

  }

}
