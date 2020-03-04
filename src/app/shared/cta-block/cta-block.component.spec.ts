import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBlockComponent } from './cta-block.component';

describe('CtaBlockComponent', () => {
  let component: CtaBlockComponent;
  let fixture: ComponentFixture<CtaBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
