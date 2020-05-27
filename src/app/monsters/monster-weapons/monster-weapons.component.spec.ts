import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterWeaponsComponent } from './monster-weapons.component';

describe('MonsterWeaponsComponent', () => {
  let component: MonsterWeaponsComponent;
  let fixture: ComponentFixture<MonsterWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
