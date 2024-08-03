import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilTambahPage } from './mobil-tambah.page';

describe('MobilTambahPage', () => {
  let component: MobilTambahPage;
  let fixture: ComponentFixture<MobilTambahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MobilTambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
