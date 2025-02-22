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
  isMobileView!: boolean;

  ngOnInit(): void {
    this.isMobileService.isMobileView$.subscribe((isMobileView) => {
      if (this.isMobileView !== isMobileView) {
        this.isMobileView = isMobileView;
        this.background = this.isMobileView ? 'palabras_mobile' : 'palabras';
      }
    });
  }
}
