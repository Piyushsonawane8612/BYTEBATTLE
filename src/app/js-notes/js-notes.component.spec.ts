import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsNotesComponent } from './js-notes.component';

describe('JsNotesComponent', () => {
  let component: JsNotesComponent;
  let fixture: ComponentFixture<JsNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsNotesComponent]
    });
    fixture = TestBed.createComponent(JsNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
