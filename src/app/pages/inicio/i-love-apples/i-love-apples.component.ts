import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { CarouselComponent } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-i-love-apples',
  standalone: true,
  imports: [MenuComponent, ModalComponent, CarouselComponent],
  templateUrl: './i-love-apples.component.html',
  styleUrl: './i-love-apples.component.scss'
})
export class ILoveApplesComponent {
  mostrarFlecha = true;
  showModal = false;
  images = [
    '../../../../assets/images/s1.png',
    '../../../../assets/images/s2.png',
    '../../../../assets/images/s3.png',
    '../../../../assets/images/s4.png',
  ];

  abrirModal(): void {
    this.showModal = true;
  }

  cerrarModal(): void {
    this.showModal = false;
    this.mostrarFlecha = false;
  }
}
