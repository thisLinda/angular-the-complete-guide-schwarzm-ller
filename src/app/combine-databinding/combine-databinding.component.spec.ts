import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineDatabindingComponent } from './combine-databinding.component';

describe('CombineDatabindingComponent', () => {
  let component: CombineDatabindingComponent;
  let fixture: ComponentFixture<CombineDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
