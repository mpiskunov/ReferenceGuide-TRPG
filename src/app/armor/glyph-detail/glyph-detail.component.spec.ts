import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyphDetailComponent } from './glyph-detail.component';

describe('GlyphDetailComponent', () => {
  let component: GlyphDetailComponent;
  let fixture: ComponentFixture<GlyphDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyphDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyphDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
