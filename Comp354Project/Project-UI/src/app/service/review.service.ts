import { Injectable } from '@angular/core';
import { Review  } from '../model/review';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {


  private reviewsUrl: string;

  constructor(private http: HttpClient)
  {
    this.reviewsUrl = 'http://localhost:8080/reviews';
  }


  public findReviewById(ProductId: string): Observable<Review[]>
  {
        return this.http.get<Review[]>(`${this.reviewsUrl}/${ProductId}`);
   }



  public createReview(review: Review): Observable<Object>
  {
        //return this.http.post(`${this.reviewsUrl}/add`,review);
        return this.http.post(`${this.reviewsUrl}/add`,review,{headers: new HttpHeaders().set('Content-Type','application/json')});
  }



  public save(review: Review) {
     return this.http.post<Review>(this.reviewsUrl, review);
  }
}
