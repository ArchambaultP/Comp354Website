import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../model/review';
import { ReviewService} from "../../service/review.service";
import { ActivatedRoute} from '@angular/router';
import Cookies from 'js-cookie';
import { Product } from '../../model/product';


@Component({
  selector: 'order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  orderId;
  paymentId;

  constructor(private reviewService: ReviewService,private route: ActivatedRoute)
  {

  }

  ngOnInit()
  {
       var orderCookie = JSON.parse(Cookies.get('order'));
       this.orderId = orderCookie.order.id;
       this.paymentId = orderCookie.order.payment.id;
       Cookies.remove('order')
       Cookies.remove('Cart')
  }



}
