import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCuidadorComponent } from './home-cuidador.component';

describe('HomeCuidadorComponent', () => {
  let component: HomeCuidadorComponent;
  let fixture: ComponentFixture<HomeCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCuidadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
