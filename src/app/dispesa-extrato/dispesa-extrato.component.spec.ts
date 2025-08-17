import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispesaExtratoComponent } from './dispesa-extrato.component';

describe('DispesaExtratoComponent', () => {
  let component: DispesaExtratoComponent;
  let fixture: ComponentFixture<DispesaExtratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispesaExtratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispesaExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
