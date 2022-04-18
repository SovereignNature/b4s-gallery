import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';


import { OpenseaGalleryService } from '@app/services/opensea-gallery.service';
import { Breath } from '@app/interfaces/breath';
import { Metadata } from '@app/interfaces/metadata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bfs-gallery';
  breath!: Breath;
  metadata!: Metadata;
  paramsObject!: Params;
  tid!: string;
  cid!: string;

  constructor(private route: ActivatedRoute, private openSeaService: OpenseaGalleryService) { }

  ngOnInit(): void {
    

    this.route.queryParams.subscribe((params: any) => {
      this.cid = params.cid;
      this.tid = params.tid;

      if(this.cid !== undefined && this.tid !== undefined) {
        this.openSeaService.getBreath(this.cid, this.tid).subscribe((value: Breath) => {
          this.breath = value;
        });

        this.openSeaService.getMetadata(this.cid, this.tid).subscribe((value: Metadata) => {
          this.metadata = value;
        });
      }
    });
  }
 }
