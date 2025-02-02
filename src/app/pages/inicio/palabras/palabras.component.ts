import { Component, inject, OnInit } from '@angular/core';
import { IsMobileService } from '../../../services/is-mobile.service';

@Component({
  selector: 'app-palabras',
  standalone: true,
  imports: [],
  templateUrl: './palabras.component.html',
  styleUrl: './palabras.component.scss'
})
export class PalabrasComponent implements OnInit {
  private readonly isMobileService = inject(IsMobileService);
  backgroundRoot = '../../../../assets/images';
  background!: string;

  ngOnInit(): void {
    this.isMobileService.isMobileView$.subscribe((isMobileView) => {
      this.background = this.getBackgroundStyle(isMobileView ? 'palabras_mobile' : 'palabras');
    });
  }

  getBakgroundUrl(image: string): string {
    return `${this.backgroundRoot}/${image}.png`;
  }

  getBackgroundStyle(image: string): string {
    return `url("${this.getBakgroundUrl(image)}")`;
  }
}
