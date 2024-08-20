import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesRegistroComponent } from './perfiles-registro.component';

describe('PerfilesRegistroComponent', () => {
  let component: PerfilesRegistroComponent;
  let fixture: ComponentFixture<PerfilesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilesRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
