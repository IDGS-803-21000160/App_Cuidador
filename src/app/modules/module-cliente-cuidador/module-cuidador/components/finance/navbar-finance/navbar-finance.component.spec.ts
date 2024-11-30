import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFinanceComponent } from './navbar-finance.component';

describe('NavbarFinanceComponent', () => {
  let component: NavbarFinanceComponent;
  let fixture: ComponentFixture<NavbarFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarFinanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
