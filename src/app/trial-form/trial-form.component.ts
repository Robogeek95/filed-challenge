import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Details } from '../home/details.model';
import { PaymentService } from '../services/payment/payment.service';

@Component({
  selector: 'app-trial-form',
  templateUrl: './trial-form.component.html',
  styleUrls: ['./trial-form.component.scss'],
})
export class TrialFormComponent implements OnInit {
  myForm: FormGroup;
  step: number;

  agreed = new FormControl('no', [Validators.required]);
  // Form state
  loading = false;
  success = false;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private ps: PaymentService
  ) {
    this.myForm = this.fb.group({});
    this.step = 1;
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      firstName: [
        '',
        Validators.required,
        Validators.min(3),
        Validators.max(65),
      ],
      lastName: [
        '',
        Validators.required,
        Validators.min(3),
        Validators.max(65),
      ],
      email: [
        '',
        Validators.required,
        Validators.email,
        Validators.min(3),
        Validators.max(65),
      ],
      phone: ['', Validators.required],
      monthlyAdBudget: ['', Validators.required],
    });
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get age() {
    return this.myForm.get('age');
  }

  get budget() {
    return this.myForm.get('age');
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.myForm.value;
    console.log(formValue);

    this.ps.makePayment(formValue);
    this.loading = false;
  }

  switchStep(step: number) {
    this.step = step;
  }
}
