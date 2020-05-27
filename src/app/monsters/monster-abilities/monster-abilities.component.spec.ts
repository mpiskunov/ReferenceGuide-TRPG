import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAbilitiesComponent } from './monster-abilities.component';

describe('MonsterAbilitiesComponent', () => {
  let component: MonsterAbilitiesComponent;
  let fixture: ComponentFixture<MonsterAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
