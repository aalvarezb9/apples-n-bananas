import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/Home.png',
    'assets/images/Home2.png',
    'assets/images/NuestraHistoria.png',
    'assets/images/NuestraHistoria2.png',
    'assets/images/Queofrecemos.png',
    'assets/images/Queofrecemos2.png',
    'assets/images/talleres.png',
  ];

  readonly ROTATE_INTERVAL = 100;

  currentImage!: string;

  private intervalId: any;

  ngOnInit(): void {
    this.currentImage = this.getRandomImage();

    this.intervalId = setInterval(() => {
      this.currentImage = this.getRandomImage();
    }, this.ROTATE_INTERVAL);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
}
