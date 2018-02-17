import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  bitbucketUrl = environment.social.bitbucket
  linkedinUrl = environment.social.linkedin
  facebookUrl = environment.social.facebook

  constructor() { }

  ngOnInit() {
    
  }

}
