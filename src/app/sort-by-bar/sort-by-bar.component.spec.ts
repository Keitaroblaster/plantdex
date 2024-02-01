import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByBarComponent } from './sort-by-bar.component';

describe('SortByBarComponent', () => {
  let component: SortByBarComponent;
  let fixture: ComponentFixture<SortByBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortByBarComponent]
    });
    fixture = TestBed.createComponent(SortByBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
