import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {
  screenWidth: number = window.innerWidth;
  isMobileView = new BehaviorSubject<boolean>(this.screenWidth < 968);
  isMobileView$ = this.isMobileView.asObservable();

  changeView(isMobileView: boolean): void {
    console.log('cambió', isMobileView)
    this.isMobileView.next(isMobileView);
  }
}
