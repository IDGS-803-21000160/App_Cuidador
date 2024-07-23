import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallInfoComponent } from './ball-info.component';

describe('BallInfoComponent', () => {
  let component: BallInfoComponent;
  let fixture: ComponentFixture<BallInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
