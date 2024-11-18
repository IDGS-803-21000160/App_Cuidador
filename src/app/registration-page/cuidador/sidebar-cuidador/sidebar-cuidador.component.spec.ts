import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCuidadorComponent } from './sidebar-cuidador.component';

describe('SidebarCuidadorComponent', () => {
  let component: SidebarCuidadorComponent;
  let fixture: ComponentFixture<SidebarCuidadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarCuidadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
