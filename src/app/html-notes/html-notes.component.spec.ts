import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlNotesComponent } from './html-notes.component';

describe('HtmlNotesComponent', () => {
  let component: HtmlNotesComponent;
  let fixture: ComponentFixture<HtmlNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlNotesComponent]
    });
    fixture = TestBed.createComponent(HtmlNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
