import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() title;
  @Input() desc;
  @Input() url;
  @Input() modal = ""
  @Input() featImg = "";
  @Input() category = "";

  constructor() { }

  ngOnInit() {
    
  }

  btnClicked () {
    if (this.modal === ""){
      window.open(this.url, '_blank'); 
    }
  }

}
