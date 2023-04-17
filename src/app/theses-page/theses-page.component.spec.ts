import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesesPageComponent } from './theses-page.component';

describe('ThesesPageComponent', () => {
  let component: ThesesPageComponent;
  let fixture: ComponentFixture<ThesesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
