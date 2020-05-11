import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapDetailComponent } from './trap-detail.component';

describe('TrapDetailComponent', () => {
  let component: TrapDetailComponent;
  let fixture: ComponentFixture<TrapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
