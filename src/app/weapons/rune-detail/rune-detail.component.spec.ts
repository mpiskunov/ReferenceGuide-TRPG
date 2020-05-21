import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneDetailComponent } from './rune-detail.component';

describe('RuneDetailComponent', () => {
  let component: RuneDetailComponent;
  let fixture: ComponentFixture<RuneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
