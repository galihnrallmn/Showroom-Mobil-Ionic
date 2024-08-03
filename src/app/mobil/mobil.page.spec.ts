import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilPage } from './mobil.page';

describe('MobilPage', () => {
  let component: MobilPage;
  let fixture: ComponentFixture<MobilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
