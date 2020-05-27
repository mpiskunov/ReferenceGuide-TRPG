import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterInformationsComponent } from './monster-informations.component';

describe('MonsterInformationsComponent', () => {
  let component: MonsterInformationsComponent;
  let fixture: ComponentFixture<MonsterInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
