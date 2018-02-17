import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  @Input() text;
  @Input() icon;
  @Input() background;
  @Input() href;

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    window.open(this.href, "_blank")
  }
}
