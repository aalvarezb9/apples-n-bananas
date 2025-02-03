import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ImageLoaderDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  contactInfo = {
    email: 'info@applesbananas.com',
    phone: '+504 9684-6140',
    brand: 'Apples N\' Bananas',
  };

  links = [
    { label: 'Home', url: 'home' },
    { label: 'Nuestra Historia', url: 'nuestra-historia' },
    { label: 'Que ofrecemos', url: 'paquetes' },
    { label: 'Paquetes', url: 'paquetes' },
  ];

  socials = [
    { icon: 'bi-instagram', url: 'https://www.instagram.com/applesnbananashn/' },
    { icon: 'bi-facebook', url: 'https://www.facebook.com/applesnbananashn/' },
    { icon: 'bi-linkedin', url: 'https://www.linkedin.com/company/apples-n-bananas/' },
    { icon: 'bi-whatsapp', url: 'https://wa.me/+50496846140' },
  ];

  openEmail(): void {
    window.open('mailto:info@applesbananas.com?subject=Información', '_self');
  }

  call(): void {
    window.open('tel:+50496846140', '_self');
  }
}
