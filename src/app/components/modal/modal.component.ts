import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'b4s-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() noDisplay: any;
  @Output() onHidePopup = new EventEmitter();

  close(): void {    
    this.onHidePopup.emit();
  }

}
