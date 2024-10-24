import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSidebarComponent } from './global-sidebar.component';

describe('GlobalSidebarComponent', () => {
  let component: GlobalSidebarComponent;
  let fixture: ComponentFixture<GlobalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
