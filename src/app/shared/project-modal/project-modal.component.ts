import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {
  @Input() downloadUrl = null;
  @Input() sourceUrl = null;
  @Input() modalId = "";
  @Input() title = "";

  constructor() { }

  ngOnInit() {
  }

}
