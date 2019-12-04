import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public searchText: BehaviorSubject<string> = new BehaviorSubject<string>(" ");
  constructor() { }
}
