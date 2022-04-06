import { Component, OnInit } from '@angular/core';
import { OpenseaGalleryService } from './opensea-gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bfs-gallery';
  data!: any;
  
  constructor(private openSeaService: OpenseaGalleryService) {}
  
  ngOnInit(): void {
    
  }
  
}
