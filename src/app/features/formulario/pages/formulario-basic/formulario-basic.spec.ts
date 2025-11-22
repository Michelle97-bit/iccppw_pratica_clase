import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBasic } from './formulario-basic';

describe('FormularioBasic', () => {
  let component: FormularioBasic;
  let fixture: ComponentFixture<FormularioBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
