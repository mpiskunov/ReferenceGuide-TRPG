import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDetailComponent } from './monster-detail.component';

describe('MonsterDetailComponent', () => {
  let component: MonsterDetailComponent;
  let fixture: ComponentFixture<MonsterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonsterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
