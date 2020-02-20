import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openGithub(){
    window.open(environment.social.github, '_blank');
  }

  downloadCv(){
    window.open(environment.cv_download, '_blank');
  }
}
