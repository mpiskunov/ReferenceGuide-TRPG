import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmunitionDetailComponent } from './ammunition-detail.component';

describe('AmmunitionDetailComponent', () => {
  let component: AmmunitionDetailComponent;
  let fixture: ComponentFixture<AmmunitionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmunitionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmunitionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
