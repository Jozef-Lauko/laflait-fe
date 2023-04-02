import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrologueListComponent } from './prologue-list.component';

describe('PrologueListComponent', () => {
  let component: PrologueListComponent;
  let fixture: ComponentFixture<PrologueListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrologueListComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PrologueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
