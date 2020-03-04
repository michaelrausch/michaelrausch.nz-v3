import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  githubUrl = environment.social.github
  linkedinUrl = environment.social.linkedin
  facebookUrl = environment.social.facebook
  px500Url = environment.social.px500

  constructor() { }

  ngOnInit() {
    
  }

}
