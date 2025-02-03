import { Component, Input } from '@angular/core';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ImageLoaderDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo = '';
  @Input() descripcion = '';
  @Input() imagen!: string;
}
