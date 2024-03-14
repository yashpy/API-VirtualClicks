import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealComponentComponent } from './heal-component.component';

describe('HealComponentComponent', () => {
  let component: HealComponentComponent;
  let fixture: ComponentFixture<HealComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
