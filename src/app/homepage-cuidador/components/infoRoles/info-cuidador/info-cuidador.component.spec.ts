import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuidadorComponent } from './info-cuidador.component';

describe('InfoCuidadorComponent', () => {
  let component: InfoCuidadorComponent;
  let fixture: ComponentFixture<InfoCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCuidadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
