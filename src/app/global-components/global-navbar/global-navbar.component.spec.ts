import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavbarComponent } from './global-navbar.component';

describe('GlobalNavbarComponent', () => {
  let component: GlobalNavbarComponent;
  let fixture: ComponentFixture<GlobalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
