import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import {OrderModule} from 'ngx-order-pipe';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [OrderModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // normally this would be to test the HTTP request
  it('should "get" a list of products', () => {
    expect(component.products).toBeDefined();
  });

  it('should be ordered by votes', () => {
    expect(component.order).toMatch('votes');
  });

  it('should be ordered by votes', () => {
    expect(de.query(By.css('.product-submit-by')).nativeElement.innerHTML).toMatch('Submitted By:');
  });

  it('should have a link', () => {
    expect(de.query(By.css('a')).nativeElement).toBeTruthy();
  });

  it('should have cards rendered', () => {
    expect(de.query(By.css('.card')).nativeElement).toBeTruthy();
  });

  it('should increment the votes by one when calling upVote', () => {
    const upvote = component.products[0].votes;
    component.upVote(1);
    expect(component.products[0].votes).toEqual(upvote + 1);
  });

});
