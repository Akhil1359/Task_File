import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
//import { store } from '../store';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  getBooks: any;
  constructor(private router: Router,
    private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => {
      this.getBooks = data;
    })
  }
  

}
