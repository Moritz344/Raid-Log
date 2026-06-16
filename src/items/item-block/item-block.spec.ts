import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlock } from './item-block';

describe('ItemBlock', () => {
  let component: ItemBlock;
  let fixture: ComponentFixture<ItemBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
