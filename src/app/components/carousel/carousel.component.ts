import { Component, Input } from '@angular/core';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [ImageLoaderDirective],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() images: string[] = [];

}
