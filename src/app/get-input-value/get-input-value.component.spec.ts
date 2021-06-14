import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInputValueComponent } from './get-input-value.component';

describe('GetInputValueComponent', () => {
  let component: GetInputValueComponent;
  let fixture: ComponentFixture<GetInputValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInputValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
