import { Component, inject, output } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { TextAnimationService } from '../../../services/text-animation.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  showModal = true;
  bgColor = '#9F9F9F';
  phrases = [
    'Aprendizaje ',
    'Alegría ',
    'Experiencias ',
    'Estabilidad Emocional ',
  ];
  currentText = '';
  private readonly textAnimationService = inject(TextAnimationService);
  modalCerrada = output<void>();


  empezarAnimacion(): void {
    this.textAnimationService.animateText(this.phrases).subscribe((text) => {
      this.currentText = text;
    });
    this.modalCerrada.emit();
  }

}
