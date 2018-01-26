import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section-content-with-glyph',
  templateUrl: './resume-section-content-with-glyph.component.html',
  styleUrls: ['./resume-section-content-with-glyph.component.css']
})
export class ResumeSectionContentWithGlyphComponent implements OnInit {
  @Input() icon;

  constructor() { }

  ngOnInit() {
  }

}
