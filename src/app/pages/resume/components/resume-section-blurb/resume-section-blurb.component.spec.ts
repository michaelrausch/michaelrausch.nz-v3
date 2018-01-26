import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionBlurbComponent } from './resume-section-blurb.component';

describe('ResumeSectionBlurbComponent', () => {
  let component: ResumeSectionBlurbComponent;
  let fixture: ComponentFixture<ResumeSectionBlurbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSectionBlurbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
