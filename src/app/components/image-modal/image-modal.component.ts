import { Component, Input, output } from '@angular/core';


declare var bootstrap: any;

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})
export class ImageModalComponent {
  @Input() imageUrl = '';
  @Input() index!: number;
  onCloseModal = output();

  closeModal() {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
        this.onCloseModal.emit();
      }
    }
  }
}
