import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombDetailComponent } from './bomb-detail.component';

describe('BombDetailComponent', () => {
  let component: BombDetailComponent;
  let fixture: ComponentFixture<BombDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
