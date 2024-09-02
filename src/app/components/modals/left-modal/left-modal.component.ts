import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-left-modal',
  templateUrl: './left-modal.component.html',
  standalone: true,
  styleUrl: './left-modal.component.css',
  imports: [CommonModule, ReactiveFormsModule]

})
export class LeftModalComponent {
  @Input() title! :string;
  @Input() openModal! :boolean;
  @Output() toggleModal = new EventEmitter();

  onToggleModal(){
    this.toggleModal.emit();
  }
}
