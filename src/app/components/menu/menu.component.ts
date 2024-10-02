import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { CardComponent } from '../card/card.component';

interface MenuItem {
  img: string;
  titulo?: string;
  paquetes?: MenuItem[]
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    { img: '../../../assets/images/tutorias.png', titulo: 'Tutorías', paquetes: [{ img: '../../../assets/images/Paquete1.jpg' }, { img: '../../../assets/images/Paquete2.jpg' }, { img: '../../../assets/images/Paquete3.jpg' }] },
    { img: '../../../assets/images/estimulacion-temprana.png', titulo: 'Estimulación Temprana', paquetes: [{ img: '../../../assets/images/Paquete4.jpg' }] },
    { img: '../../../assets/images/abordaje-emocional.png', titulo: 'Abordaje Emocional', paquetes: [{ img: '../../../assets/images/Paquete5.jpg' }] },
    { img: '../../../assets/images/talleres.png', titulo: 'Talleres', paquetes: [{ img: '../../../assets/images/Paquete6.jpg' }] },
  ];
  elementoSeleccionado: number = -1;
  nPaquetesVisto = 0;

  ngOnInit(): void {
    AOS.init({
      duration: 500,
      once: true
    });
  }

  seleccionarElemento(i: number): void {
    this.elementoSeleccionado = i;
    this.nPaquetesVisto++;
  }
}
