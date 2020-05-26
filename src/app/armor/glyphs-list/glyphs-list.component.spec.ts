import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphsListComponent } from './glyphs-list.component';

describe('GlyphsListComponent', () => {
  let component: GlyphsListComponent;
  let fixture: ComponentFixture<GlyphsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
