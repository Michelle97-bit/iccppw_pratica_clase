import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSwitches } from './formulario-switches';

describe('FormularioSwitches', () => {
  let component: FormularioSwitches;
  let fixture: ComponentFixture<FormularioSwitches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioSwitches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSwitches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
