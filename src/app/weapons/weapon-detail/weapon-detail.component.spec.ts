import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDetailComponent } from './weapon-detail.component';

describe('WeaponDetailComponent', () => {
  let component: WeaponDetailComponent;
  let fixture: ComponentFixture<WeaponDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
