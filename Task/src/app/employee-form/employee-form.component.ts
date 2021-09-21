import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private router: Router,
    private fb: FormBuilder,
    private service: EmployeeService,) { }

    employeeForm!:FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      published: ['', Validators.required],
    });
  }

  onSubmit() {
    this.service.addBook(this.employeeForm.value)
    .subscribe(data => {
    });
  }
}
