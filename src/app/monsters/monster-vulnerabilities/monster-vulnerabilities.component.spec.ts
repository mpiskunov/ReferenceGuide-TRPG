import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterVulnerabilitiesComponent } from './monster-vulnerabilities.component';

describe('MonsterVulnerabilitiesComponent', () => {
  let component: MonsterVulnerabilitiesComponent;
  let fixture: ComponentFixture<MonsterVulnerabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterVulnerabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterVulnerabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
