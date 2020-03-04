import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  githubUrl = environment.social.github
  linkedinUrl = environment.social.linkedin
  facebookUrl = environment.social.facebook
  twitterUrl = environment.social.twitter
  px500Url = environment.social.px500

  constructor() { }

  ngOnInit() {
  }

}
