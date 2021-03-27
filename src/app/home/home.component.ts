import { Component, OnInit } from '@angular/core';
import { Details } from './details.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  details: Observable<Details[]>;
  constructor(private store: Store<AppState>) {
    this.details = this.store.select((state) => state.detail);
  }
  addProduct(name: any, price: any) {
    this.store.dispatch({
      type: 'ADD_DETAIL',
      payload: {
        firstName: 'firstName',
        lastName: 'lastName',
        monthlyAdBudget: 0,
        phone: 0,
        email: '',
      } as Details,
    });
  }

  onSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    // this.addProduct(this.productName.value, this.productPrice.value);
  }

  ngOnInit() {}
}
