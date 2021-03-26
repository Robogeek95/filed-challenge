import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialPageComponent } from './trial-page.component';

describe('TrialPageComponent', () => {
  let component: TrialPageComponent;
  let fixture: ComponentFixture<TrialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
