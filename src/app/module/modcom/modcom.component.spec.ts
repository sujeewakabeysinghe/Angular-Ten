import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModcomComponent } from './modcom.component';

describe('ModcomComponent', () => {
  let component: ModcomComponent;
  let fixture: ComponentFixture<ModcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
