import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesLoadedService {
  private totalImages = 0;
  private loadedImages = 0;
  
  private allImagesLoadedSubject = new BehaviorSubject<boolean>(false);

  allImagesLoaded$ = this.allImagesLoadedSubject.asObservable();

  registerImage() {
    this.totalImages++;
  }

  imageLoaded() {
    this.loadedImages++;
    this.allImagesLoadedSubject.next(this.loadedImages === this.totalImages && this.totalImages > 0);
  }
}
