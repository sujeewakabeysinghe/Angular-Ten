import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickFunctionComponent } from './click-function.component';

describe('ClickFunctionComponent', () => {
  let component: ClickFunctionComponent;
  let fixture: ComponentFixture<ClickFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
