import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsHTMLComponent } from './questions-html.component';

describe('QuestionsHTMLComponent', () => {
  let component: QuestionsHTMLComponent;
  let fixture: ComponentFixture<QuestionsHTMLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsHTMLComponent]
    });
    fixture = TestBed.createComponent(QuestionsHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
