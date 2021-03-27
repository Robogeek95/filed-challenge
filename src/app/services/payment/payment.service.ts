import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Details } from 'src/app/home/details.model';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private store: Store, private http: HttpClient) {}

  public makePayment(details: Details) {
    // this.http.post()
    this.addProduct(details);
  }

  private addProduct(details: Details) {
    this.store.dispatch({
      type: 'ADD_DETAIL',
      payload: <Details>{
        firstName: details.firstName,
        lastName: details.lastName,
        monthlyAdBudget: details.monthlyAdBudget,
        phone: details.phone,
        email: details.email,
      },
    });
  }
}
