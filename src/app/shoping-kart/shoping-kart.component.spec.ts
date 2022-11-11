import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingKartComponent } from './shoping-kart.component';

describe('ShopingKartComponent', () => {
  let component: ShopingKartComponent;
  let fixture: ComponentFixture<ShopingKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingKartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
