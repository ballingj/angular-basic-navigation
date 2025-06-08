import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideComponent } from './left-side.component';

describe('LeftSide', () => {
  let component: LeftSideComponent;
  let fixture: ComponentFixture<LeftSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
