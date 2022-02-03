import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCollectionByComponent } from './order-collection-by.component';

describe('OrderCollectionByComponent', () => {
  let component: OrderCollectionByComponent;
  let fixture: ComponentFixture<OrderCollectionByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCollectionByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCollectionByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
