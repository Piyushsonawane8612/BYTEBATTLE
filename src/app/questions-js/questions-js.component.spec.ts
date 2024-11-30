import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsJSComponent } from './questions-js.component';

describe('QuestionsJSComponent', () => {
  let component: QuestionsJSComponent;
  let fixture: ComponentFixture<QuestionsJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsJSComponent]
    });
    fixture = TestBed.createComponent(QuestionsJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
