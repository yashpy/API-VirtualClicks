import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHealComponentComponent } from './sub-heal-component.component';

describe('SubHealComponentComponent', () => {
  let component: SubHealComponentComponent;
  let fixture: ComponentFixture<SubHealComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubHealComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubHealComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
