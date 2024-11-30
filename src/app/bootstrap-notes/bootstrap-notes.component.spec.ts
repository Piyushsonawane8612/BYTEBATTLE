import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapNotesComponent } from './bootstrap-notes.component';

describe('BootstrapNotesComponent', () => {
  let component: BootstrapNotesComponent;
  let fixture: ComponentFixture<BootstrapNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BootstrapNotesComponent]
    });
    fixture = TestBed.createComponent(BootstrapNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
