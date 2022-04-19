import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OpenseaGalleryService } from '@app/services/opensea-gallery.service';
import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  openSeaUrl!: string;
  breath!: Breath;
  metadata!: Metadata;
  image$!: Observable<boolean>;
  tid!: string;
  cid!: string;

  constructor(private route: ActivatedRoute, private openSeaService: OpenseaGalleryService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.cid = params.cid;
      this.tid = params.tid;
      this.openSeaUrl = `https://testnets.opensea.io/assets/0xd653694558af69d09709768afac9e35c9fb984c8/${this.tid}/?force_update=true`;
      
      if(this.cid !== undefined && this.tid !== undefined) {

        this.openSeaService.getBreath(this.cid, this.tid).subscribe((value: Breath) => {
          this.breath = value;
        });
        
        this.openSeaService.getMetadata(this.cid, this.tid).subscribe((value: Metadata) => {
          this.metadata = value;
        });

        this.openSeaService.getImage(this.cid, this.tid).subscribe((value: Blob) => {
          this.image$ = value ? of(true) : of(false);
        });

      }
    });
  }
 }
