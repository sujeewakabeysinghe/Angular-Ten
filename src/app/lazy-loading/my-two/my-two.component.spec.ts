import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTwoComponent } from './my-two.component';

describe('MyTwoComponent', () => {
  let component: MyTwoComponent;
  let fixture: ComponentFixture<MyTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
