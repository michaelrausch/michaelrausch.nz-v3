import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private http: HttpClient){
    
  }

  /**
   * Perform a request to the contact API,
   * 
   * This is required if you are using a free Azure or Heroku
   * plan that puts an application to sleep after a period of 
   * inactivity. This will ensure the application is awake before
   * the contact form is used
   */
  checkApiUrl(){
    this.http.get(environment.api_url).subscribe();
  }

  printVersionInfo(){
      console.log("App Version: " + environment.version.app)
      console.log("Production: " + environment.production)
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        
        window.scrollTo(0, 0)
    });

    this.checkApiUrl();
    this.printVersionInfo();
}
}
