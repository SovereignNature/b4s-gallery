import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/interfaces/nft';
import { OpenseaGalleryService } from 'src/app/services/opensea-gallery.service';

@Component({
  selector: 'b4s-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.scss']
})
export class DisplayerComponent implements OnInit {
  title = 'bfs-gallery';
  data!: any;
  nft!: Nft

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
