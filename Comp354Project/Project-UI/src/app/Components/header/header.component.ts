import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService} from "../../service/search.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public searchText = "";

  constructor(private router: Router, public searchService: SearchService) {}

  ngOnInit() {
  }

  setSearchText(){
    this.searchService.searchText = this.searchText;
    console.log("Search text in header: " + this.searchText);
  }
}
