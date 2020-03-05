import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() headerText;
  @Input() theme;
  @Input() showDrop;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  backClicked() {
    this.router.navigateByUrl('');
  }

}
