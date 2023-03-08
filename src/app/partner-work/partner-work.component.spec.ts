import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWorkComponent } from './partner-work.component';

describe('PartnerWorkComponent', () => {
  let component: PartnerWorkComponent;
  let fixture: ComponentFixture<PartnerWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
