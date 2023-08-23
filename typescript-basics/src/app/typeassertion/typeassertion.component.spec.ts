import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeassertionComponent } from './typeassertion.component';

describe('TypeassertionComponent', () => {
  let component: TypeassertionComponent;
  let fixture: ComponentFixture<TypeassertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeassertionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeassertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
