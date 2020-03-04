import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  page = 0
  numPages = 2

  constructor() { }

  ngOnInit() {
  }

  nextPage() {
    if (this.page >= this.numPages) return
    this.page += 1
  }
  
  previousPage() {
    if (this.page <=0 ) return
    this.page -= 1
  }
}
