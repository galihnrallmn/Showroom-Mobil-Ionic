import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerekEditPage } from './merek-edit.page';

describe('MerekEditPage', () => {
  let component: MerekEditPage;
  let fixture: ComponentFixture<MerekEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MerekEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
