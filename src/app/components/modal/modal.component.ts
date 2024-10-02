import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Input() bgColor: string = 'white';
  @Input() colorBotonCerrar = 'white';
  onClose = output<void>();

  constructor() { }

  closeModal() {
    this.show = false;
    this.onClose.emit();
  }

  onContainerClicked(_: MouseEvent): void {
    this.closeModal();
  }

  onDialogClicked(event: MouseEvent): void {
    event.stopPropagation();
  }
}
