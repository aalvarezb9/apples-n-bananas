import { Component, inject, OnInit } from '@angular/core';
import { IsMobileService } from '../../../services/is-mobile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cuento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cuento.component.html',
  styleUrl: './cuento.component.scss'
})
export class CuentoComponent implements OnInit {
  pagina = 1;
  private readonly isMobileViewService = inject(IsMobileService);
  isMobileView!: boolean;

  ngOnInit(): void {
    this.isMobileViewService.isMobileView$.subscribe((isMobileView) => {
      this.isMobileView = isMobileView;
    });
  }

  deslizarHaciaArriba(): void {
    document.getElementById('cuento')?.scrollIntoView({ behavior: 'smooth' });
  }
}
