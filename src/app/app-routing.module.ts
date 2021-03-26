import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrialPageComponent } from './trial-page/trial-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trial', component: TrialPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
