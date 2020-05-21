import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmunitionsComponent } from './ammunition-list.component';

describe('AmmunitionsComponent', () => {
  let component: AmmunitionsComponent;
  let fixture: ComponentFixture<AmmunitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmmunitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmmunitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
