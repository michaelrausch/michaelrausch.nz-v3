import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-embed',
  templateUrl: './youtube-embed.component.html',
  styleUrls: ['./youtube-embed.component.css']
})
export class YoutubeEmbedComponent implements OnInit {
  @Input() videoId = "";
  embedUrl: SafeResourceUrl 
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    var url = "https://www.youtube.com/embed/" + this.videoId
    this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}
