import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapsComponent } from './trap-list.component';

describe('TrapsComponent', () => {
  let component: TrapsComponent;
  let fixture: ComponentFixture<TrapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
