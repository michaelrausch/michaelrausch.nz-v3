import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showcase-image-wide',
  templateUrl: './showcase-image-wide.component.html',
  styleUrls: ['./showcase-image-wide.component.css']
})
export class ShowcaseImageWideComponent implements OnInit {
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

}
