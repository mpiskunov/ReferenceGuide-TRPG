import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterLootsComponent } from './monster-loots.component';

describe('MonsterLootsComponent', () => {
  let component: MonsterLootsComponent;
  let fixture: ComponentFixture<MonsterLootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterLootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterLootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
