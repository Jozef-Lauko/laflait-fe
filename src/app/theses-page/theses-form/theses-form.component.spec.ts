import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesesFormComponent } from './theses-form.component';

describe('ThesesFormComponent', () => {
  let component: ThesesFormComponent;
  let fixture: ComponentFixture<ThesesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
