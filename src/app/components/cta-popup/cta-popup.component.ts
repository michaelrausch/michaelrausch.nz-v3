import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta-popup',
  templateUrl: './cta-popup.component.html',
  styleUrls: ['./cta-popup.component.css']
})
export class CtaPopupComponent implements OnInit {
  isClosed = false;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isClosed = true;
  }

}
