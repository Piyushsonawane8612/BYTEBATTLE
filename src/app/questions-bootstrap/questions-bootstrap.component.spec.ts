import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBootstrapComponent } from './questions-bootstrap.component';

describe('QuestionsBootstrapComponent', () => {
  let component: QuestionsBootstrapComponent;
  let fixture: ComponentFixture<QuestionsBootstrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsBootstrapComponent]
    });
    fixture = TestBed.createComponent(QuestionsBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
