import { Component, OnInit } from '@angular/core';
import { Review } from '../../model/review';
import { ReviewService} from "../../service/review.service";
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

review: Review = new Review();
    //constructor() { }
   constructor(private reviewService: ReviewService,private route: ActivatedRoute)
   {

   }


  ngOnInit() {
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

