import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Donald", "Trump", "donald.trump@demo.com", 50000),
    new SalesPerson('Joe', 'Biden', 'joe.biden@demo.com', 40000),
    new SalesPerson('Hillary', 'Clinton', 'hillary.clinton@demo.com', 90000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
