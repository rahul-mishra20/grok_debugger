import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrokInputPatternComponent } from './grok-input-pattern.component';

describe('GrokInputPatternComponent', () => {
  let component: GrokInputPatternComponent;
  let fixture: ComponentFixture<GrokInputPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrokInputPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrokInputPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
