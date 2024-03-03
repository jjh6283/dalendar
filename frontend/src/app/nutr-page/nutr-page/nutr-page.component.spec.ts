import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrPageComponent } from './nutr-page.component';

describe('NutrPageComponent', () => {
  let component: NutrPageComponent;
  let fixture: ComponentFixture<NutrPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NutrPageComponent]
    });
    fixture = TestBed.createComponent(NutrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
