import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section-header',
  templateUrl: './resume-section-header.component.html',
  styleUrls: ['./resume-section-header.component.css']
})
export class ResumeSectionHeaderComponent implements OnInit {
  @Input() smallerText;
  
  constructor() { }

  ngOnInit() {
  }

}
