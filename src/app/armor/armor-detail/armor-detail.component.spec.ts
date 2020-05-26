import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorDetailComponent } from './armor-detail.component';

describe('ArmorDetailComponent', () => {
  let component: ArmorDetailComponent;
  let fixture: ComponentFixture<ArmorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
