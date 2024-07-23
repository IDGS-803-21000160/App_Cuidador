import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrivacyNoticeComponent } from './info-privacy-notice.component';

describe('InfoPrivacyNoticeComponent', () => {
  let component: InfoPrivacyNoticeComponent;
  let fixture: ComponentFixture<InfoPrivacyNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPrivacyNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPrivacyNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
