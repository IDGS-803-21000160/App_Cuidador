import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInitialComponent } from './page-initial.component';

describe('PageInitialComponent', () => {
  let component: PageInitialComponent;
  let fixture: ComponentFixture<PageInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageInitialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
