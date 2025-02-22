import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ImageLoaderDirective } from '../../directives/image-loader.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImageLoaderDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly router = inject(Router);
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateTo(fragment: string) {
    this.toggleMenu();
    this.router.navigate(['/'], { fragment });
  }

  goTo(url: string): void {
    this.toggleMenu();
    window.open(url, '_blank');
  }
}
