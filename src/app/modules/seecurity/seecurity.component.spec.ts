import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecurityComponent } from './seecurity.component';

describe('SeecurityComponent', () => {
  let component: SeecurityComponent;
  let fixture: ComponentFixture<SeecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
