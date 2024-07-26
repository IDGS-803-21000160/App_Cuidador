import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeHomepageComponent } from './informative-homepage.component';

describe('InformativeHomepageComponent', () => {
  let component: InformativeHomepageComponent;
  let fixture: ComponentFixture<InformativeHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformativeHomepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativeHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
