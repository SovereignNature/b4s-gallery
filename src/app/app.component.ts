import { Component, OnInit } from '@angular/core';

import { OpenseaGalleryService } from '@app/services/opensea-gallery.service';
import { Nft } from '@app/interfaces/nft';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bfs-gallery';
  data!: any;
  nft!: Nft;

  constructor(private openSeaService: OpenseaGalleryService) {}

  ngOnInit(): void {
    this.openSeaService.getCollection(this.getRandomNFT(3)).subscribe((value: Nft) => {
      this.nft = value;
    });
  }

  // TODO: REMOVE AFTER BACKEND IS IMPLEMENTED
  getRandomNFT(max: number): number {
    return Math.floor(Math.random() * max);
  }

 }
