import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.css']
})
export class SocialIconComponent implements OnInit {
  @Input() href = "";
  @Input() icon = "";
  @Input() color = "#000";
  
  constructor() { }

  ngOnInit() {

  }

  onClick(){
    window.open(this.href, '_blank')
  }

}
