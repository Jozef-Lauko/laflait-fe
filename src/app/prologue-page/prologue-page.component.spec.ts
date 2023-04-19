import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProloguePageComponent } from './prologue-page.component';

describe('ProloguePageComponent', () => {
  let component: ProloguePageComponent;
  let fixture: ComponentFixture<ProloguePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProloguePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProloguePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
