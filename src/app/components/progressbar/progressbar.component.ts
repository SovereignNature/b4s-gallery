import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b4s-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() progress!: number;
  @Input() total!: number;
  @Input() breathProgress!: number;
  @Input() title!: string;
  color!: string;
  

  constructor() { }

  ngOnInit(): void {
    
  }

  calculateProgress(progress: number): number {
    if(!progress) {
      progress = 0;
    }

    if(this.total === 0) {
      this.total = progress;
    } else if (!this.total) {
      this.total = 100;
    }

    if(progress > this.total) {
      progress = 100;
      this.total = 100;
    }

    return progress = (progress / this.total) * 100;
  }
  
}
