import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispesaFormComponent } from './dispesa-form.component';

describe('DispesaFormComponent', () => {
  let component: DispesaFormComponent;
  let fixture: ComponentFixture<DispesaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispesaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispesaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
