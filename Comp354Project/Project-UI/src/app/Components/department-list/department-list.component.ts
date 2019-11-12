import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../../model/department';
import { Category } from '../../model/category';

import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

 departments: Department[];

 constructor(private productService: ProductService,
             private route: ActivatedRoute) {}

  ngOnInit() {
    this.productService.findAllDepartments().subscribe(data => {
     this.departments = data;
     console.log(data);
    });
  }
}