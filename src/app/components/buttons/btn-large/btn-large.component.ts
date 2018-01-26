import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-large',
  templateUrl: './btn-large.component.html',
  styleUrls: ['./btn-large.component.css']
})
export class BtnLargeComponent implements OnInit {
  @Input() dark = false;
  @Input() route = "";
  
  constructor() { }

  ngOnInit() {
  }

}
