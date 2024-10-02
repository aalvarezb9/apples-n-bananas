import { Component } from '@angular/core';

@Component({
  selector: 'app-cuento',
  standalone: true,
  imports: [],
  templateUrl: './cuento.component.html',
  styleUrl: './cuento.component.scss'
})
export class CuentoComponent {
  pagina = 1;

  deslizarHaciaArriba(): void {
    document.getElementById('cuento')?.scrollIntoView({ behavior: 'smooth' });
  }
}
