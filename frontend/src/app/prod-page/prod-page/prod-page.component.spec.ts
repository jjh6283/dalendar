import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPageComponent } from './prod-page.component';

describe('ProdPageComponent', () => {
  let component: ProdPageComponent;
  let fixture: ComponentFixture<ProdPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdPageComponent]
    });
    fixture = TestBed.createComponent(ProdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
