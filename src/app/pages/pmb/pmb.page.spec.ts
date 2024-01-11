import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmbPage } from './pmb.page';

describe('PmbPage', () => {
  let component: PmbPage;
  let fixture: ComponentFixture<PmbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PmbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
