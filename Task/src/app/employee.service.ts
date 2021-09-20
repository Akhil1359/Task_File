import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}
  private url= "http://localhost:8080/getBooks"
  
  getBooks(): Observable<object> {
    return this.http.get(this.url);
  }
  addBook(emp:Employee): Observable<object> {
    return this.http.post("http://localhost:8080/addBook",emp);
  }
  /*send(value: any) {
    console.log(value);
  }*/
}
