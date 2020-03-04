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
    this.cookieCheck()
  }

  close() {
    this.isClosed = true;
    localStorage.setItem("cta_popup_hidden", "true");
  }

  cookieCheck() {
    var hidden = localStorage.getItem("cta_popup_hidden");

    if (hidden != null) {
      this.isClosed = true;
    }
  }

}
