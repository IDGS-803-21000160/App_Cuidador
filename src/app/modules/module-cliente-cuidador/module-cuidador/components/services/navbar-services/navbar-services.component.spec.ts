import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarServicesComponent } from './navbar-services.component';

describe('NavbarServicesComponent', () => {
  let component: NavbarServicesComponent;
  let fixture: ComponentFixture<NavbarServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
