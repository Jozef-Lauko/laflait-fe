import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrologueFormComponent } from './prologue-form.component';

describe('PrologueFormComponent', () => {
  let component: PrologueFormComponent;
  let fixture: ComponentFixture<PrologueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrologueFormComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrologueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
