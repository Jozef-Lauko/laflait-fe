import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionFormComponent } from './subsection-form.component';

describe('SubsectionFormComponent', () => {
  let component: SubsectionFormComponent;
  let fixture: ComponentFixture<SubsectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
