import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedCtaComponent } from './highlighted-cta.component';

describe('HighlightedCtaComponent', () => {
  let component: HighlightedCtaComponent;
  let fixture: ComponentFixture<HighlightedCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
