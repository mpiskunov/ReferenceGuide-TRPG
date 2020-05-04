import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralItemsComponent } from './general-items.component';

describe('GeneralItemsComponent', () => {
  let component: GeneralItemsComponent;
  let fixture: ComponentFixture<GeneralItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
