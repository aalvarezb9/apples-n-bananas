import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IsMobileService } from './services/is-mobile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly isMobileService = inject(IsMobileService);
  screenWidth!: number;
  isMobileView!: boolean;
  title = 'Apples & Bananas';

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobileView = this.screenWidth < 968;
    this.isMobileService.changeView(this.isMobileView);
    AOS.init({
      duration: 1500,
      once: true
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    this.isMobileView = this.screenWidth < 968;
    this.isMobileService.changeView(this.isMobileView);
  }
}
