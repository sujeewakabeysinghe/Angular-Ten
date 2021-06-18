import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComComponent } from './two-com.component';

describe('TwoComComponent', () => {
  let component: TwoComComponent;
  let fixture: ComponentFixture<TwoComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
