import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-custom-landing-page',
  templateUrl: './custom-landing-page.component.html',
  styleUrls: ['./custom-landing-page.component.css']
})
export class CustomLandingPage implements OnInit {
  content: CustomContent = {
    name: "",
    welcome_content: "",
    downloads: null,
    projects: null,
    links: null
  }

  constructor(private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var pageId: string = this.route.snapshot.params['id'];
    this.downloadContent(pageId)
  }

  private downloadContent(contentId: string) {
    var url = environment.employer_content_url + contentId + ".json"
    
    this.http.get<CustomContent>(url).subscribe((response) => {
      this.content = response
      console.log(this.content)

    }, () => {
      this.router.navigate(['/404']);
    })
    }
}


interface Download {
  name: string,
  href: string
}

interface Project {
  name: string,
  href: string,
  desc: string
}

interface Link {
  name: string,
  href: string,
}

interface CustomContent {
  name: string,
  welcome_content: string
  downloads: [Download],
  links: [Link],
  projects: [Project]
}