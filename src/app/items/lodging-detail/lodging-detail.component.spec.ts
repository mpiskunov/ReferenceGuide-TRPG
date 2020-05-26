import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingDetailComponent } from './lodging-detail.component';

describe('LodgingDetailComponent', () => {
  let component: LodgingDetailComponent;
  let fixture: ComponentFixture<LodgingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LodgingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
