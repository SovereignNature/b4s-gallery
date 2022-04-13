import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/interfaces/nft';
import { OpenseaGalleryService } from 'src/app/services/opensea-gallery.service';

@Component({
  selector: 'b4s-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  nft!: Nft

  constructor(private openSeaService: OpenseaGalleryService) {}

  getRandomNFT(max: number): number {
    return Math.floor(Math.random() * max);
  }

  getNFTImage(): any {
    this.openSeaService.getCollection(this.getRandomNFT(3)).subscribe((value: Nft) => {
      this.nft = value;
    });
  }

}
