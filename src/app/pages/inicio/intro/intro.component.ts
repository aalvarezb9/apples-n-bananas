import { Component, inject, OnInit, output } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { TextAnimationService } from '../../../services/text-animation.service';
import { CommonModule } from '@angular/common';
import { IsMobileService } from '../../../services/is-mobile.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  showModal = true;
  bgColor = '#9F9F9F';
  phrases = [
    'Aprendizaje ',
    'Alegría ',
    'Experiencias ',
    'Estabilidad Emocional ',
  ];
  currentText = '';
  isMobileView!: boolean;
  private readonly textAnimationService = inject(TextAnimationService);
  private readonly isMobileService = inject(IsMobileService);
  modalCerrada = output<void>();

  ngOnInit(): void {
    this.isMobileService.isMobileView$.subscribe((isMobileView) => {
      console.log('cambio interno', isMobileView)
      this.isMobileView = isMobileView;
    });
  }

  empezarAnimacion(): void {
    this.textAnimationService.animateText(this.phrases).subscribe((text) => {
      this.currentText = text;
    });
    this.modalCerrada.emit();
  }

}
