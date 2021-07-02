import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCartComponent } from './action-cart.component';

describe('ActionCartComponent', () => {
  let component: ActionCartComponent;
  let fixture: ComponentFixture<ActionCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
