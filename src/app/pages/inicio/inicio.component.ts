import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { PalabrasComponent } from './palabras/palabras.component';
import { CuentoComponent } from './cuento/cuento.component';
import { ILoveApplesComponent } from './i-love-apples/i-love-apples.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IntroComponent, PalabrasComponent, CuentoComponent, ILoveApplesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  cargarPaginaCompleta = false;
}
