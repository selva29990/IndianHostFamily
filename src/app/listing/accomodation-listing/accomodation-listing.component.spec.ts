import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationListingComponent } from './accomodation-listing.component';

describe('AccomodationListingComponent', () => {
  let component: AccomodationListingComponent;
  let fixture: ComponentFixture<AccomodationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccomodationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccomodationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
