import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({});
    this.step = 1;
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      //   ],
      // ],
      // age: [
      //   null,
      //   [
      //     Validators.required,
      //     Validators.minLength(2),
      //     Validators.min(18),
      //     Validators.max(65),
      //   ],
      // ],

      budget: ['', [Validators.required]],
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

    this.loading = false;
  }

  switchStep(step: number) {
    this.step = step;
  }
}
