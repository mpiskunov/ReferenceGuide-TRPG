import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDerivedStatisticsComponent } from './monster-derived-statistics.component';

describe('MonsterDerivedStatisticsComponent', () => {
  let component: MonsterDerivedStatisticsComponent;
  let fixture: ComponentFixture<MonsterDerivedStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterDerivedStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDerivedStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
