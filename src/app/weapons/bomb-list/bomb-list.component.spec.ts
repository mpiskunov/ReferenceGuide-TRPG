import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BombsComponent } from './bomb-list.component';

describe('BombsComponent', () => {
  let component: BombsComponent;
  let fixture: ComponentFixture<BombsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BombsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
