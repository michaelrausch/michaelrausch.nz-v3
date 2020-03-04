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

  constructor(private router: Router, 
        private http: HttpClient){

    const url = `//piwik.michaelrausch.nz/`; 
    const id = 1; // Site Id
  }

  printVersionInfo(){
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        
        window.scrollTo(0, 0)
    });

    this.printVersionInfo();
}
}
