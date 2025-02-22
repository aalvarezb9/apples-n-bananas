import { Component, inject, OnInit, output } from '@angular/core';
import { ModalComponent } from '../../../components/modal/modal.component';
import { TextAnimationService } from '../../../services/text-animation.service';
import { CommonModule } from '@angular/common';
import { IsMobileService } from '../../../services/is-mobile.service';
import { ImageLoaderDirective } from '../../../directives/image-loader.directive';
import { ImagesLoadedService } from '../../../services/image-loader.service';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ModalComponent, CommonModule, ImageLoaderDirective, LoaderComponent],
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
  private readonly imagesLoadedService = inject(ImagesLoadedService);
  modalCerrada = output<void>();
  isLoadingImages = true;

  ngOnInit(): void {
    this.empezarAnimacion();
    this.isMobileService.isMobileView$.subscribe((isMobileView) => {
      this.isMobileView = isMobileView;
    });

    this.imagesLoadedService.allImagesLoaded$.subscribe((allLoaded) => {
      this.isLoadingImages = !allLoaded;
    });
  }

  empezarAnimacion(): void {
    this.textAnimationService.animateText(this.phrases).subscribe((text) => {
      this.currentText = text;
    });
  }

}
