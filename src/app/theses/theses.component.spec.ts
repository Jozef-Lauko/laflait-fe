import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ThesesComponent} from "./theses.component";

describe('TheseComponent', () => {
  let component: ThesesComponent;
  let fixture: ComponentFixture<ThesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThesesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
