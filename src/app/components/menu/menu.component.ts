import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { IsMobileService } from '../../services/is-mobile.service';

declare var bootstrap: any;

const IMAGE_MODAL_ID = 'imageModal';
interface MenuItem {
  img: string;
  titulo?: string;
  imageModal: string;
  imageModalMobile: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, ImageLoaderDirective, ImageModalComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  @ViewChild(ImageModalComponent) imageModal!: ImageModalComponent;

  private readonly isMobileViewService = inject(IsMobileService);
  items: MenuItem[] = [
    { img: '../../../assets/images/tutorias.png', titulo: 'Tutorías', imageModal: '../../../../assets/images/s1.png', imageModalMobile: '../../../../assets/images/s1-mobile.png' },
    { img: '../../../assets/images/estimulacion-temprana.png', titulo: 'Estimulación Temprana', imageModal: '../../../../assets/images/s2.png', imageModalMobile: '../../../../assets/images/s2-mobile.png' },
    { img: '../../../assets/images/abordaje-emocional.png', titulo: 'Terapia Emocional', imageModal: '../../../../assets/images/s4.png', imageModalMobile: '../../../../assets/images/s4-mobile.png' },
    { img: '../../../assets/images/talleres.png', titulo: 'Talleres', imageModal: '../../../../assets/images/s3.png', imageModalMobile: '../../../../assets/images/s3-mobile.png' },
  ];
  elementoSeleccionado: number = -1;
  nPaquetesVisto = 0;
  isMobileView!: boolean;
  modalOpen = false;

  ngOnInit(): void {
    AOS.init({
      duration: 500,
      once: true
    });

    this.isMobileViewService.isMobileView$.subscribe((isMobileView) => {
      if (this.isMobileView !== isMobileView) {
        this.isMobileView = isMobileView;
        if (this.modalOpen) {
          const index = this.imageModal.index;
          this.closeImageModal();
          this.openImageModal(index);
        }
      }
    });
  }

  seleccionarElemento(i: number): void {
    this.elementoSeleccionado = i;
    this.nPaquetesVisto++;
  }

  getRows(paquetes: any[] | undefined, size = 3): MenuItem[][] {
    const rows: MenuItem[][] = [];
    if (paquetes) {
      for (let i = 0; i < paquetes.length; i += size) {
        rows.push(paquetes.slice(i, i + size));
      }
    }
    return rows;
  }
  
  openImageModal(index: number): void {
    this.imageModal.imageUrl = this.isMobileView ? this.items[index].imageModalMobile : this.items[index].imageModal;
    this.imageModal.index = index;
    const modalElement = document.getElementById(IMAGE_MODAL_ID);
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
      this.modalOpen = true;
    }
  }

  closeImageModal(): void {
    const modalElement = document.getElementById(IMAGE_MODAL_ID);
    if (modalElement) {
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
        this.modalOpen = false;
      }
    }
  }
}
