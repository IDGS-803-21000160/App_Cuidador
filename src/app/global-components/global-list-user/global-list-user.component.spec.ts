import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalListUserComponent } from './global-list-user.component';

describe('GlobalListUserComponent', () => {
  let component: GlobalListUserComponent;
  let fixture: ComponentFixture<GlobalListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalListUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
