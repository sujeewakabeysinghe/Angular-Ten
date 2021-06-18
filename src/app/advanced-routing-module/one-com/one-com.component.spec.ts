import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComComponent } from './one-com.component';

describe('OneComComponent', () => {
  let component: OneComComponent;
  let fixture: ComponentFixture<OneComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
