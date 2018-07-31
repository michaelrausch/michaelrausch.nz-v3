import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { MatomoTracker, MatomoInjector } from 'ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, 
        private http: HttpClient, 
        private matomoInjector: MatomoInjector,
        private matomoTracker: MatomoTracker){

    const url = `//piwik.michaelrausch.nz/`; 
    const id = 1; // Site Id
    this.matomoInjector.init(url, id);
    matomoTracker.trackPageView();
  }

  printVersionInfo(){
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }

        this.matomoTracker.trackPageView(evt.url);
        
        window.scrollTo(0, 0)
    });

    this.printVersionInfo();
}
}
