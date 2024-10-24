import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageadminPrincipalComponent } from './pageadmin-principal.component';

describe('PageadminPrincipalComponent', () => {
  let component: PageadminPrincipalComponent;
  let fixture: ComponentFixture<PageadminPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageadminPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageadminPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
