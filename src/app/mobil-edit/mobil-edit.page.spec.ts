import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilEditPage } from './mobil-edit.page';

describe('MobilEditPage', () => {
  let component: MobilEditPage;
  let fixture: ComponentFixture<MobilEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
