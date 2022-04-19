import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, retry, share, Subject, switchMap, takeUntil, timer } from 'rxjs';

import { OpenseaGalleryService } from '@app/services/opensea-gallery.service';
import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private stopPolling = new Subject();
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

        this.image$ = timer(1, 3000).pipe(
          switchMap(() => this.openSeaService.getImage2(this.cid, this.tid)),
          retry(),
          share(),
          takeUntil(this.stopPolling)
        );

      }
    });
  }
 }
