import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPopulatingTableComponent } from './self-populating-table.component';

describe('SelfPopulatingTableComponent', () => {
  let component: SelfPopulatingTableComponent;
  let fixture: ComponentFixture<SelfPopulatingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfPopulatingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfPopulatingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
