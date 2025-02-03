import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { ImagesLoadedService } from '../services/image-loader.service';

@Directive({
  selector: '[appImageLoader]',
  standalone: true
})
export class ImageLoaderDirective implements OnInit {

  private readonly imagesLoadedService = inject(ImagesLoadedService)

  constructor(
    private el: ElementRef<HTMLImageElement>
  ) {}

  ngOnInit(): void {
    // Registramos la imagen en el servicio
    this.imagesLoadedService.registerImage();

    const nativeElement = this.el.nativeElement;

    if (nativeElement.complete) {
      this.imagesLoadedService.imageLoaded();
    } else {
      nativeElement.addEventListener('load', () => {
        this.imagesLoadedService.imageLoaded();
      });

      nativeElement.addEventListener('error', () => {
        this.imagesLoadedService.imageLoaded();
      });
    }
  }
}
