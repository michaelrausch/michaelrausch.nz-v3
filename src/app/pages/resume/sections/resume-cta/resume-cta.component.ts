import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-resume-cta',
  templateUrl: './resume-cta.component.html',
  styleUrls: ['./resume-cta.component.css']
})
export class ResumeCtaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToLinkedIn(){
    window.open(environment.contact.linkedIn, '_blank');
  }
}
