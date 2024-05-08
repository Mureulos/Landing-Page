import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalCardComponent } from './testimonal-card.component';

describe('TestimonalCardComponent', () => {
  let component: TestimonalCardComponent;
  let fixture: ComponentFixture<TestimonalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
