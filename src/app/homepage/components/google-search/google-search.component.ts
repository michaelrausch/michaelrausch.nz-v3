import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.css']
})
export class GoogleSearchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  doSearch(query) {
    window.open("https://google.com/search?q=" + query.value, "_blank")
  }


}
