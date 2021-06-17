import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsInterfacesComponent } from './models-interfaces.component';

describe('ModelsInterfacesComponent', () => {
  let component: ModelsInterfacesComponent;
  let fixture: ComponentFixture<ModelsInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsInterfacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
