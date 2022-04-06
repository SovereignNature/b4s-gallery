import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b4s-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() progress!: number;
  @Input() total!: number;
  @Input() title!: string;
  color!: string;
  

  constructor() { }

  ngOnInit(): void {
    if(!this.progress) {
      this.progress = 0;
    }

    if(this.total === 0) {
      this.total = this.progress;
    } else if (!this.total) {
      this.total = 100;
    }

    if(this.progress > this.total) {
      this.progress = 100;
      this.total = 100;
    }

    this.progress = (this.progress / this.total) * 100;
  }

}
