import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employer-page',
  templateUrl: './employer-page.component.html',
  styleUrls: ['./employer-page.component.css']
})
export class EmployerPageComponent implements OnInit {
  content: EmployerContent = {
    name: "",
    welcome_content: "",
    downloads: null,
    projects: null
  }

  constructor(private http: HttpClient, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var employerId: string = this.route.snapshot.params['id'];
    this.downloadContent(employerId)
  }

  downloadContent(employer: string) {
    var url = environment.employer_content_url + employer + ".json"
    
    this.http.get<EmployerContent>(url).subscribe((response) => {
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

interface EmployerContent {
  name: string,
  welcome_content: string
  downloads: [Download],
  projects: [Project]
}