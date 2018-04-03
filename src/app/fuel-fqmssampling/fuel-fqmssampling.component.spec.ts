import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelFqmssamplingComponent } from './fuel-fqmssampling.component';

describe('FuelFqmssamplingComponent', () => {
  let component: FuelFqmssamplingComponent;
  let fixture: ComponentFixture<FuelFqmssamplingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelFqmssamplingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelFqmssamplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
