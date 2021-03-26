import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrialFormComponent } from './trial-form/trial-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { OfferComponent } from './offer/offer.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrialFormComponent,
    NavbarComponent,
    OfferComponent,
    BenefitsComponent,
    FeedbacksComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
