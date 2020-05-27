import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterStatisticsComponent } from './monster-statistics.component';

describe('MonsterStatisticsComponent', () => {
  let component: MonsterStatisticsComponent;
  let fixture: ComponentFixture<MonsterStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
