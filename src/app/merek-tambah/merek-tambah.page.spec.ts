import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerekTambahPage } from './merek-tambah.page';

describe('MerekTambahPage', () => {
  let component: MerekTambahPage;
  let fixture: ComponentFixture<MerekTambahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MerekTambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
