import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAngularComponent } from './questions-angular.component';

describe('QuestionsAngularComponent', () => {
  let component: QuestionsAngularComponent;
  let fixture: ComponentFixture<QuestionsAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsAngularComponent]
    });
    fixture = TestBed.createComponent(QuestionsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
